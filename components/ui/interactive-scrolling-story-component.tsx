"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const slidesData = [
  {
    title: "Artificial General Intelligence",
    description: "We explore the theoretical foundations and practical pathways toward AGI — neural architectures that can reason, generalize, and adapt across diverse cognitive domains.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#000000",
    textColor: "#ffffff",
    accent: "#3b82f6",
    label: "Foundational",
  },
  {
    title: "Advanced Vision Models",
    description: "Pushing the boundaries of how machines perceive the physical world. From scene understanding to temporal reasoning, redefining computer vision for industry.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#0a0a0a",
    textColor: "#ffffff",
    accent: "#06b6d4",
    label: "Perception",
  },
  {
    title: "Global AI Trends",
    description: "A continuous radar of the most disruptive developments in the global AI landscape. We analyze emerging patterns to keep Clarum at the frontier of innovation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    bgColor: "#050510",
    textColor: "#ffffff",
    accent: "#8b5cf6",
    label: "Strategy",
  },
  {
    title: "Clarum Private Lab",
    description: "The behind-the-scenes of our proprietary research. We share challenges, breakthroughs, and the evolution of products built to solve tomorrow's most complex problems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#0a0a0f",
    textColor: "#ffffff",
    accent: "#f59e0b",
    label: "Research",
  },
];

export function ScrollingVision() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSlide = slidesData[activeIndex];

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: activeSlide.bgColor,
    color: activeSlide.textColor,
    transition: 'background-color 0.8s ease, color 0.8s ease',
  };

  const gridPatternStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <section className="vision-section">
      <div
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <div style={{ height: `${slidesData.length * 100}vh` }}>
          <div
            className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
            style={dynamicStyles}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

              {/* Left: Text */}
              <div className="relative flex flex-col justify-center px-8 md:px-16 border-r border-white/[0.06]">
                {/* Eyebrow */}
                <div className="absolute top-14 left-8 md:left-16">
                  <span
                    className="text-[11px] font-semibold uppercase text-blue-400 block mb-6"
                    style={{ letterSpacing: '0.35em' }}
                  >
                    Our Vision
                  </span>
                  {/* Progress bars */}
                  <div className="flex space-x-2">
                    {slidesData.map((slide, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const container = scrollContainerRef.current;
                          if (container) {
                            const scrollableHeight = container.scrollHeight - window.innerHeight;
                            const stepHeight = scrollableHeight / slidesData.length;
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                          }
                        }}
                        className="h-[3px] rounded-full transition-all duration-500 ease-in-out"
                        style={{
                          width: index === activeIndex ? '3rem' : '1.5rem',
                          backgroundColor: index === activeIndex
                            ? activeSlide.accent
                            : 'rgba(255,255,255,0.15)',
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Slide content */}
                <div className="relative h-72 w-full">
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: index === activeIndex ? 'translateY(0)' : 'translateY(2rem)',
                      }}
                    >
                      {/* Category label */}
                      <span
                        className="text-[10px] font-bold uppercase mb-5 block"
                        style={{
                          color: slide.accent,
                          letterSpacing: '0.25em',
                        }}
                      >
                        {slide.label} — {String(index + 1).padStart(2, '0')}
                      </span>

                      <h2
                        className="font-bold leading-[1.05] mb-0"
                        style={{
                          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                          letterSpacing: '-0.035em',
                        }}
                      >
                        {slide.title}
                      </h2>

                      <p
                        className="mt-6 max-w-md text-white/60 mb-0"
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: '1.75',
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="absolute bottom-14 left-8 md:left-16">
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: activeSlide.accent,
                      fontSize: '0.8125rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Explore Research
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>

              {/* Right: Image with grid */}
              <div
                className="hidden md:flex items-center justify-center p-8"
                style={gridPatternStyle}
              >
                <div className="relative w-[55%] h-[78vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.06]">
                  <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                  >
                    {slidesData.map((slide, index) => (
                      <div key={index} className="w-full h-full">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
