"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const publicationsData = [
  {
    id: "pub-01",
    title: "Scaling Laws in Multi-Modal Transformer Architectures",
    topic: "Machine Learning",
    topicId: "ml",
    authors: "A. Cordova, J. Doe",
    date: "MAR 2026",
    abstract: "We investigate the scaling behaviors of multi-modal generative models combining visual, textual, and spatial data. Our findings demonstrate a super-linear predictability curve for parameter efficiency when utilizing specialized MoE routing mechanisms.",
    link: "#"
  },
  {
    id: "pub-02",
    title: "Quantum Error Correction on Spatial Qubit Lattices",
    topic: "Quantum Computing",
    topicId: "qc",
    authors: "C. Smith, M. Johnson",
    date: "FEB 2026",
    abstract: "A novel approach to fault-tolerant quantum computation by embedding error syndrome extraction directly into the hardware topology. We demonstrate a 40% reduction in overhead for logical qubit synthesis.",
    link: "#"
  },
  {
    id: "pub-03",
    title: "Zero-Shot Sim-to-Real Transfer in Bipedal Robotics",
    topic: "Robotics",
    topicId: "robotics",
    authors: "E. Brown, K. Lee",
    date: "JAN 2026",
    abstract: "By leveraging domain randomization and deep reinforcement learning in highly physics-accurate parallel simulators, we achieve robust zero-shot locomotion transfer to bipedal hardware on uneven terrain.",
    link: "#"
  },
  {
    id: "pub-04",
    title: "Cognitive Load in Spatial Interfaces (BCI)",
    topic: "Human-Computer Interaction",
    topicId: "hci",
    authors: "L. Wright",
    date: "NOV 2025",
    abstract: "An empirical evaluation of sustained attention in purely spatial computing environments vs traditional desktops, highlighting critical UI adjustments necessary for non-invasive BCI adoption.",
    link: "#"
  },
  {
    id: "pub-05",
    title: "Efficient Approximation of Infinite Attention Contexts",
    topic: "Machine Learning",
    topicId: "ml",
    authors: "J. Doe, S. Vora",
    date: "OCT 2025",
    abstract: "We introduce 'SparseRing', an attention mechanism that scales O(N log N) by utilizing a decentralized ring topology across GPU clusters, allowing effective context windows exceeding 10M tokens.",
    link: "#"
  }
];

const topics = [
  { id: "all", label: "All Topics" },
  { id: "ml", label: "Machine Learning" },
  { id: "qc", label: "Quantum Computing" },
  { id: "robotics", label: "Robotics" },
  { id: "hci", label: "HCI & Perception" }
];

export function PublicationsList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPaper, setSelectedPaper] = useState<null | typeof publicationsData[0]>(null);

  const filteredPapers = activeFilter === "all" 
    ? publicationsData 
    : publicationsData.filter(p => p.topicId === activeFilter);

  return (
    <section className="relative py-24 bg-black overflow-hidden min-h-screen">
      {/* Soft Glow Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-50 translate-x-1/3 -translate-y-1/3" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20 block" />
                Research Topic
              </h4>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {topics.map(topic => {
                  const isActive = activeFilter === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setActiveFilter(topic.id)}
                      className={cn(
                        "relative px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                        isActive ? "text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="pub-active-filter-bg"
                          className="absolute inset-0 bg-white/10 rounded-xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 block">{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main List */}
          <main className="flex-1 w-full relative z-10">
            <motion.div layout className="flex flex-col gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPapers.map((paper, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    key={paper.id}
                    className="group relative bg-zinc-900/40 border border-white/5 hover:border-white/20 rounded-xl p-6 md:p-8 backdrop-blur-xl transition-colors cursor-pointer"
                    onClick={() => setSelectedPaper(paper)}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-medium tracking-[0.2em] uppercase text-[10px] sm:text-[11px] text-white/50">
                            {paper.topic}
                          </span>
                          <span className="text-white/40 font-medium tracking-[0.2em] uppercase text-[10px] sm:text-[11px]">{paper.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-cyan-100 transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-white/50 text-sm hidden md:block">{paper.authors}</p>
                      </div>
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all transform group-hover:scale-110">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredPapers.length === 0 && (
                <div className="py-20 text-center text-white/50 w-full rounded-2xl border border-white/5 border-dashed">
                  No publications found in this category.
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>

      {/* Modal / Dialog Overlay */}
      <AnimatePresence>
        {selectedPaper && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPaper(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl pointer-events-auto relative overflow-hidden"
              >
                {/* Glow inside modal */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

                <button
                  onClick={() => setSelectedPaper(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white/10 text-white/70 font-medium tracking-[0.2em] uppercase text-[10px] sm:text-[11px] rounded-md">
                      {selectedPaper.topic}
                    </span>
                    <span className="text-white/40 font-medium tracking-[0.2em] uppercase text-[10px] sm:text-[11px] flex items-center">
                      {selectedPaper.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">
                      {selectedPaper.title}
                    </h2>
                    <p className="text-white/50 text-sm">{selectedPaper.authors}</p>
                  </div>

                  <div className="w-full h-px bg-white/10" />

                  <div className="prose prose-invert">
                    <h4 className="text-white/80 font-medium mb-2 text-lg">Abstract</h4>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                      {selectedPaper.abstract}
                    </p>
                  </div>

                  <div className="mt-4 pt-6 flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
                      <ArrowDownToLine className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
