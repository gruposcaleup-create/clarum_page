/* eslint-disable @next/next/no-img-element */
"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/button";
import { ClaudeAI, Cursor, Github, PerplexityAI, Grok, OpenAI } from "@aliimam/logos";
import { Marquee } from "@/components/ui/marquee";

const technologies = [
  {
    name: "PyTorch",
    designation: "Machine Learning Framework",
    description: "Deep learning research and production.",
    logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
    icon: <Github className="h-6 w-6 text-black" />,
  },
  {
    name: "TensorFlow",
    designation: "AI Infrastructure",
    description: "End-to-end machine learning platform.",
    logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    icon: <OpenAI className="h-6 w-6 text-black" />,
  },
  {
    name: "Hugging Face",
    designation: "Transformer Models",
    description: "State of the art NLP architectures.",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    icon: <Cursor className="h-6 w-6 text-black" />,
  },
  {
    name: "CUDA",
    designation: "Parallel Computing",
    description: "Accelerating AI on specialized hardware.",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    icon: <PerplexityAI className="h-6 w-6 text-black" />,
  },
];

export function HeroSection02() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="overflow-hidden flex flex-col px-6 items-center justify-center min-h-[90vh]">
        {/* Subtle WebGL Gradient Background */}
        <GradientWave colors={["#000000", "#0064E0", "#000000", "#0a0a0a", "#1a1a1a", "#000000"]} className="absolute inset-0 opacity-50 dark:opacity-20" /> 

        <div className="z-10 mt-10 space-y-10 border border-white/10 shadow-2xl backdrop-blur-md bg-white/5 rounded-3xl p-10 lg:p-20 mx-auto max-w-7xl flex flex-col">
          <div className="flex justify-center flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <h1 className="text-3xl font-medium md:text-5xl lg:text-7xl tracking-tighter text-center" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              Intelligent Systems
            </h1>
            <p className="max-w-md text-sm md:text-base font-light tracking-tight text-white/80 text-center lg:text-left">
              Discover top-notch research and foundational models that help craft the future of cognitive architecture and embodied AI processing.
            </p>
          </div>

          {/* Logos Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-12">
            <div className="flex items-center justify-center -space-x-4">
              <div className="flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[6]">
                <OpenAI size={32} />
              </div>
              <div className="flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[5]">
                <ClaudeAI size={32} />
              </div>
              <div className="hidden md:flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[4]">
                <Cursor size={32} />
              </div>
              <div className="flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[3]">
                <Github size={32} />
              </div>
              <div className="hidden md:flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[2]">
                <Grok size={40} />
              </div>
              <div className="flex items-center justify-center bg-zinc-950 border border-white/20 text-white shadow-2xl h-20 w-20 rounded-full relative z-[1]">
                <PerplexityAI size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-medium md:text-5xl lg:text-7xl tracking-tighter text-center" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              Processing Units
            </h1>
          </div>
 
          <div className="flex flex-col lg:flex-row lg:items-end gap-10">
            <h1 className="text-3xl font-medium md:text-5xl lg:text-7xl tracking-tighter text-center" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              Learn & Pioneer
            </h1>
            <Button className="px-12 h-16 rounded-full text-black bg-white hover:bg-neutral-200 font-medium">Read Research</Button>
          </div>
        </div>
      </div>

       <div className="w-full z-10 relative flex flex-col items-center pb-20">
          <p className="text-center text-white/60 mb-10 text-lg z-10 font-light tracking-tight relative">
            The technological stack powering our bleeding-edge research facilities
          </p>
          <Marquee className="w-full">
            {technologies.map((tech, index) => (
              <div key={index} className="h-full">
                <div className="flex items-center gap-3 h-full overflow-visible border border-white/10 bg-zinc-900/40 backdrop-blur-md rounded-2xl mx-10 min-w-[280px]">
                  <div className="absolute bg-black shadow-[0_0_20px_rgba(0,100,224,0.3)] border border-white/20 p-4 rounded-xl -left-12 top-6">
                    {/* Inverting logo colors inside the icon block */}
                    <div style={{ filter: "invert(1)" }}>
                      {tech.icon}
                    </div>
                  </div>
                  <div className="flex flex-col px-6 py-4 flex-1">
                    <h3 className="font-semibold text-white tracking-tight text-lg">{tech.name}</h3>
                    <p className="text-sm font-medium text-[#0064E0]">
                      {tech.designation}
                    </p>
                    <p className="text-xs font-light text-white/60 tracking-tight mt-2 min-h-[32px]">
                      {tech.description}
                    </p>
                  </div>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-full w-32 object-cover rounded-r-2xl"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
    </div>
  );
}
