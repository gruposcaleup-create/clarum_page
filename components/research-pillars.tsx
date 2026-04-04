"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, Aperture, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "ml",
    title: "Advanced Machine Learning",
    icon: Cpu,
    tag: "// INICIATIVA 01: ML_GEN",
    description:
      "Our foundational machine learning research is focused on creating algorithms that generalize across multiple domains with high efficiency. We are pushing the boundaries of generative models, multi-modal perception, and self-supervised architectures to achieve cognitive breakthroughs.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    color: "from-cyan-500/20",
    glow: "bg-cyan-500/30",
  },
  {
    id: "qc",
    title: "Quantum Computing",
    icon: Aperture,
    tag: "// INICIATIVA 02: QUBIT_NET",
    description:
      "Our quantum intelligence lab explores algorithm design utilizing qubit topologies. We aim to fundamentally alter computational complexity limits by hybridizing neural networks with quantum states to solve traditionally intractable problems in optimization and molecular simulation.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500/20",
    glow: "bg-purple-500/30",
  },
  {
    id: "hci",
    title: "Human-Computer Interaction",
    icon: Fingerprint,
    tag: "// INICIATIVA 03: SYNAPSE",
    description:
      "We redefine how humans interplay with machine intelligence. Through spatial computing, brain-computer interfaces, and deeply empathetic conversational agents, we strive to make technology an extension of the human mind, seamless and universally accessible.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-500/20",
    glow: "bg-emerald-500/30",
  },
];

export function ResearchPillars() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden bg-zinc-950">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full blur-[100px] lg:blur-[120px] opacity-30 mix-blend-screen",
              activeContent?.glow
            )}
          />
        </AnimatePresence>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Navigation Area */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-8">
              Research <span className="text-white/50">Pillars</span>
            </h2>
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-glow"
                        className="absolute inset-0 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md"
                        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                      />
                    )}
                    <Icon className="relative z-10 w-6 h-6" />
                    <span className="relative z-10 font-medium text-[15px] lg:text-lg tracking-tight">
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-zinc-900/40 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden p-2 group"
              >
                {/* Image Section */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden bg-zinc-950">
                  <div className={cn("absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-80", activeContent?.color, "from-zinc-950")} />
                  <motion.img
                    src={activeContent?.image}
                    alt={activeContent?.title}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover origin-center transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Text Section */}
                <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                      {activeContent?.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-light text-sm md:text-[15px]">
                      {activeContent?.description}
                    </p>
                  </div>
                  
                  <Link href="/publications" className="shrink-0 pt-2">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm tracking-tight hover:bg-zinc-200 transition-colors group/btn">
                      View Papers
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
