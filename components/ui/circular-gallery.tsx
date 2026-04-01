"use client"

import React, { useState, useEffect, useRef, useCallback, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.012, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const rotationRef = useRef(0);
    const progressRef = useRef(0); // 0 to 1, tracks how far through the "captured" scroll we are
    const totalRotationTarget = 720; // degrees of rotation allowed (2 full turns)

    // Merge refs
    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref]
    );

    // Intersection observer: detect when gallery is centered on screen
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.5);
        },
        { threshold: [0.5] }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    // Wheel capture: when active, hijack scroll and convert to rotation
    useEffect(() => {
      if (!isActive) return;

      const handleWheel = (e: WheelEvent) => {
        const delta = e.deltaY;
        const step = delta * 0.15; // sensitivity

        const newRotation = rotationRef.current + step;
        const newProgress = progressRef.current + (delta / (totalRotationTarget * 3));

        // Allow exit scroll at boundaries
        if (newProgress < 0 || newProgress > 1) {
          // Don't prevent default — let the page scroll naturally
          return;
        }

        // Capture scroll
        e.preventDefault();
        e.stopPropagation();

        rotationRef.current = newRotation;
        progressRef.current = Math.max(0, Math.min(1, newProgress));
        setRotation(newRotation);
        setIsAutoRotating(false);

        // Resume auto-rotate after inactivity
        clearTimeout((handleWheel as any)._timeout);
        (handleWheel as any)._timeout = setTimeout(() => {
          setIsAutoRotating(true);
        }, 2000);
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }, [isActive]);

    // Auto-rotation when idle
    useEffect(() => {
      if (!isAutoRotating) return;

      const autoRotate = () => {
        rotationRef.current += autoRotateSpeed;
        setRotation(rotationRef.current);
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };
      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isAutoRotating, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={mergedRef}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRot = rotation % 360;
            const relativeAngle = (itemAngle + totalRot + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.25, 1 - (normalizedAngle / 180));

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute w-[260px] h-[360px] md:w-[300px] md:h-[400px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-150px',
                  marginTop: '-200px',
                  opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl shadow-black/50 overflow-hidden group border border-white/[0.08] bg-zinc-900/30 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  >
                    <h2
                      className="text-white font-semibold leading-tight mb-0"
                      style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                    >
                      {item.common}
                    </h2>
                    <em
                      className="text-white/60 block mt-1 mb-0"
                      style={{ fontSize: '0.8125rem', fontStyle: 'italic' }}
                    >
                      {item.binomial}
                    </em>
                    <p
                      className="text-white/40 mb-0 font-medium uppercase mt-2.5"
                      style={{ fontSize: '0.625rem', letterSpacing: '0.12em' }}
                    >
                      Photo: {item.photo.by}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        {isActive && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500/60 rounded-full transition-all duration-150"
                style={{ width: `${progressRef.current * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
