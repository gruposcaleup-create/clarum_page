"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Fingerprint } from "lucide-react";
import Link from 'next/link';

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            <span className="font-medium tracking-[0.2em] uppercase text-[10px] sm:text-[11px] text-white/70">
              Talent Acquisition
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-6 sm:mb-8"
          >
            Careers at <span className="text-white/40">Clarum</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            Join a global team dedicated to solving the most profound challenges in intelligence. We offer unparalleled computational resources and an uncapped scientific culture.
          </motion.p>
        </div>
      </section>

      {/* Open Roles / Radar Section */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 z-10 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-6 sm:p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Radar Icon / Ping */}
              <div className="relative flex justify-center items-center w-24 h-24 mb-10">
                {/* Ping circles */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[ping_3s_ease-out_infinite]" />
                <div className="absolute inset-2 rounded-full border border-cyan-500/30 animate-[ping_3s_ease-out_infinite_0.5s]" />
                <div className="absolute inset-4 rounded-full border border-cyan-500/40 animate-[ping_3s_ease-out_infinite_1s]" />
                
                {/* Core */}
                <div className="relative w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Fingerprint className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">
                Global Network Scanning
              </h3>
              
              <p className="text-white/50 text-sm md:text-base max-w-lg mb-10 leading-relaxed font-light">
                We are currently processing our foundational nodes and are not opening public roles at this exact moment. However, our talent radar is always searching for exceptional anomalies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="flex items-center gap-3 px-8 py-3 bg-white/10 text-white rounded-full font-medium text-[11px] uppercase tracking-[0.2em] border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  Submit Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/research">
                  <button className="flex items-center gap-2 px-6 py-3 text-white/50 font-medium text-[11px] uppercase tracking-[0.2em] hover:text-white transition-colors">
                    <BookOpen className="w-4 h-4" /> View Research
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
