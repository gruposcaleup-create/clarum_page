"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";

const filterCategories = ["All Research", "AI Architecture", "Robotics", "Quantum Mechanics", "Editorial"];



const recentArticles = [
  {
    id: 1,
    title: "Open-Sourcing Optima-7B",
    category: "AI Architecture",
    readTime: "5 Min Read",
    date: "MAR 05, 2026",
    description: "Today we are releasing Optima-7B, a foundational model trained purely on verified qualitative datasets.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2", // Large Bento Block
    aspect: "h-[400px] md:h-full"
  },
  {
    id: 2,
    title: "Breakthrough in Dexterous Manipulation",
    category: "Robotics",
    readTime: "6 Min Read",
    date: "FEB 28, 2026",
    description: "Our robotics division has achieved a new milestone in zero-shot policy transfer for robot hands.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1",
    aspect: "h-[300px]"
  },
  {
    id: 3,
    title: "Advances in Quantum Search Algorithms",
    category: "Quantum Mechanics",
    readTime: "10 Min Read",
    date: "FEB 15, 2026",
    description: "How Grover's algorithm iterations are being optimized realistically in noisy-intermediate scale quantum hardware.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1",
    aspect: "h-[300px]"
  }
];

export default function Blog() {
  const [activeTab, setActiveTab] = useState("All Research");

  const filteredArticles = activeTab === "All Research" 
    ? recentArticles 
    : recentArticles.filter(article => article.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      
      {/* Editorial Header */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Box: Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-4 sm:mb-6 text-white max-w-4xl">
                Research <span className="text-white/30">Journal</span>
              </h1>
              
              <p className="text-white/50 text-base sm:text-lg md:text-xl font-light max-w-xl leading-relaxed">
                The latest technical updates, editorial pieces, and deep algorithmic breakdowns from the global nodes of the Clarum Research Lab.
              </p>
            </motion.div>

            {/* Right Box: GlobePulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 w-full max-w-[280px] sm:max-w-md lg:max-w-xl mx-auto lg:mx-0"
            >
              <GlobePulse />
            </motion.div>
            
          </div>
        </div>
      </section>



      {/* Filter Tabs */}
      <section className="relative px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/5">
            {filterCategories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "shrink-0 px-5 py-2.5 rounded-full font-medium tracking-[0.1em] uppercase text-[10px] transition-all",
                  activeTab === cat 
                    ? "bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid layout for older posts */}
      <section className="relative px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={article.id} 
                  className={cn("group block", article.span)}
                >
                  <Link href="#">
                    <div className="h-full rounded-[2rem] border border-white/10 hover:border-white/30 bg-zinc-900/30 hover:bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 flex flex-col p-2.5">
                      
                      {/* Article Image Container */}
                      <div className={cn("relative w-full overflow-hidden bg-zinc-950 shrink-0 rounded-[1.5rem]", article.aspect)}>
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                        />
                      </div>

                      {/* Article Content */}
                      <div className="px-6 py-6 md:px-8 md:py-8 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="font-medium tracking-[0.15em] uppercase text-[9px] text-cyan-400">
                            {article.category}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="font-medium tracking-[0.1em] uppercase text-[9px] text-white/40">
                            {article.date}
                          </span>
                        </div>

                        <h3 className={cn(
                          "font-medium tracking-tight text-white mb-3 group-hover:text-cyan-50 transition-colors",
                          article.span.includes("md:col-span-2") ? "text-2xl md:text-3xl" : "text-xl"
                        )}>
                          {article.title}
                        </h3>

                        <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
                          {article.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                          <span className="flex items-center gap-1.5 font-medium tracking-[0.1em] uppercase text-[9px] text-white/30">
                            <Clock className="w-3 h-3" /> {article.readTime}
                          </span>
                          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 px-8 py-3 bg-transparent text-white/60 border border-white/10 rounded-full font-medium text-[11px] uppercase tracking-[0.2em] hover:text-white hover:border-white/30 transition-all group">
              Load More Archives <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
      </section>

    </div>
  );
}
