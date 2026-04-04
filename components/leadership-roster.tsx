"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Fingerprint, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    id: "t-01",
    name: "Aldahír Cordova",
    role: "Founder of Clarum Group",
    description: "Architecting the Clarum Research Lab vision and leading the strategic deployment of applied AI models natively.",
    image: "/assets/aldahir.png",
    glowLight: "bg-cyan-500/20",
    icon: Fingerprint
  },
  {
    id: "t-02",
    name: "Assem Sabry",
    role: "Co-Founder & AI Researcher",
    description: "AI engineer and researcher specializing in developing and fine-tuning advanced machine learning architectures.",
    image: "/assets/assem.png",
    glowLight: "bg-purple-500/20",
    icon: Cpu
  }
];

export function LeadershipRoster() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Core <span className="text-white/40">Division</span>
          </h2>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col items-center mt-12 sm:mt-20"
              >
                {/* Abstract Ambient Glow */}
                <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-1000 group-hover:opacity-100 opacity-60", member.glowLight)} />
                
                {/* Circular Image Container */}
                <div className="relative z-30 w-52 h-52 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] -mb-16 sm:-mb-24 md:-mb-32 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-zinc-950">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Decorative Icon */}
                  <div className="absolute bottom-2 right-6 z-20 w-8 h-8 rounded-full bg-black/80 border border-white/20 flex items-center justify-center backdrop-blur-md text-white/50 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Rectangular Info Container */}
                <div className="relative z-20 w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl pt-24 sm:pt-36 pb-8 sm:pb-12 px-5 sm:px-8 flex flex-col items-center text-center transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/60">
                  <span className="inline-block mb-3 font-medium tracking-[0.2em] uppercase text-[10px] text-white/40">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                    {member.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-white/20 mb-5 group-hover:w-24 transition-all duration-700 ease-in-out" />
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-24 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 group"
        >
          {/* Inner ambient light */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">
              Build the Future with Us
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
              We are constantly seeking brilliant minds in machine learning, mathematics, physically informed neural networks, and systems engineering.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/careers">
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-tight hover:bg-zinc-200 transition-colors">
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
