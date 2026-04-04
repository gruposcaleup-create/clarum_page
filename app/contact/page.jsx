"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Terminal, Hexagon, Component, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const contactNodes = [
  {
    title: "Global Headquarters",
    description: "Executive operations and primary research clusters.",
    value: "London, UK",
    icon: MapPin,
  },
  {
    title: "Compute & Alliances",
    description: "For hardware allocation and strategic partnerships.",
    value: "partnerships@clarumlab.com",
    icon: Component,
  },
  {
    title: "Investor Relations",
    description: "Capital deployment and institutional inquiries.",
    value: "investors@clarumlab.com",
    icon: Hexagon,
  },
  {
    title: "Media & Press",
    description: "Press kits, interviews, and public statements.",
    value: "press@clarumlab.com",
    icon: Mail,
  }
];

export default function Contact() {
  const [activePurpose, setActivePurpose] = useState("Research Partnership");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Main Grid */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Topology Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >


              <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight mb-4 sm:mb-6 text-white leading-tight">
                Establish <br/>
                <span className="font-medium text-white/50">Connection</span>
              </h1>
              
              <p className="text-white/50 text-base sm:text-lg font-light max-w-md leading-relaxed mb-8 sm:mb-12">
                Clarum Research Lab maintains secure operational channels globally. Select a node parameter below or submit a direct encrypted payload.
              </p>

              <div className="flex flex-col gap-8">
                {contactNodes.map((node, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    key={idx} 
                    className="flex items-start gap-5 group cursor-default"
                  >
                    <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/50 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                      <node.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-[0.1em] uppercase text-white/80 mb-1">
                        {node.title}
                      </h4>
                      <p className="text-xs text-white/40 leading-relaxed max-w-[250px] mb-2">
                        {node.description}
                      </p>
                      <span className="text-sm font-light text-white/80 tracking-wide">
                        {node.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Encrypted Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative w-full rounded-2xl sm:rounded-[2rem] border border-white/10 bg-zinc-900/40 backdrop-blur-3xl p-5 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
                {/* Internal UI Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-white/40" />
                    <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-white/60">
                      Secure Data Input
                    </h3>
                  </div>
                  <Fingerprint className="w-6 h-6 text-white/30" />
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Subject / Purpose Toggle */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-medium tracking-[0.1em] text-white/40 ml-1">
                      Transmission Purpose
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {["Research", "Investor", "Media", "Other"].map((purpose) => (
                        <div 
                          key={purpose}
                          onClick={() => setActivePurpose(purpose)}
                          className={cn(
                            "cursor-pointer text-center px-4 py-3 rounded-xl border text-xs font-medium tracking-wide transition-all duration-300",
                            activePurpose === purpose 
                              ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                              : "bg-black/20 border-white/10 text-white/50 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {purpose}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium tracking-[0.1em] text-white/40 ml-1">
                        Identification (Name)
                      </label>
                      <input 
                        type="text" 
                        placeholder="Dr. Alan Turing" 
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/5 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium tracking-[0.1em] text-white/40 ml-1">
                        Return Node (Email)
                      </label>
                      <input 
                        type="email" 
                        placeholder="alan@institute.org" 
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-medium tracking-[0.1em] text-white/40 ml-1">
                      Organization
                    </label>
                    <input 
                      type="text" 
                      placeholder="University / Enterprise / Fund" 
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/5 transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-medium tracking-[0.1em] text-white/40 ml-1">
                      Payload (Message)
                    </label>
                    <textarea 
                      rows={5}
                      placeholder="Outline your proposition or inquiry..." 
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/5 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button className="w-full relative group overflow-hidden rounded-xl p-[1px]">
                      <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/80 to-white/40 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center gap-3 w-full bg-black px-6 py-4 rounded-xl transition-all duration-300 group-hover:bg-opacity-0 group-hover:text-black text-white font-medium text-sm tracking-wide">
                        Transmit Payload <Send className="w-4 h-4" />
                      </div>
                    </button>
                  </div>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
