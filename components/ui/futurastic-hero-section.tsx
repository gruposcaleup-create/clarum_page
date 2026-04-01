"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#FFFFFF", "#38BDF8", "#0064E0", "#000000"];

/**
 * AuroraHero Component Props
 */
export interface AuroraHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  buttonText?: string;
}

export const AuroraHero = ({
  title = "Decrease your SaaS churn by over 90%",
  subtitle = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et, distinctio eum impedit nihil ipsum modi.",
  badge = "Beta Now Live!",
  buttonText = "Start free trial",
}: AuroraHeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative flex flex-col items-center justify-center w-full min-h-[90vh] pt-24 overflow-hidden bg-black px-4 py-24 text-white"
    >
      <div className="relative z-20 flex flex-col items-center justify-center w-full mx-auto max-w-5xl text-center">
        <span className="mb-1.5 inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-sm tracking-tight text-white/80">
          {badge}
        </span>
        <h1 className="max-w-4xl text-center text-4xl font-medium leading-tight text-white sm:text-5xl md:text-7xl md:leading-tight tracking-tighter" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
          {title}
        </h1>
        <p className="my-6 max-w-2xl text-center text-base font-light tracking-tight text-white/80 leading-relaxed md:text-lg md:leading-relaxed">
          {subtitle}
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-2 rounded-full bg-black/40 px-6 py-3 text-white transition-colors hover:bg-black/60 font-medium tracking-tight"
        >
          {buttonText}
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
