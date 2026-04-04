"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-profile-card";

const modelsData = [
  {
    name: "Clarum-Text-V1",
    role: "LLM / Foundational",
    email: "clarum-text-v1@api.clarum.ai",
    avatarSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop",
    statusText: "Safety Alignment",
    statusColor: "bg-cyan-500",
    glowText: "Parameters: 1.5T",
  },
  {
    name: "Vision-Net-Pro",
    role: "Multi-modal Perception",
    email: "vision-net-pro@api.clarum.ai",
    avatarSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    statusText: "Red-Teaming Phase",
    statusColor: "bg-amber-500",
    glowText: "Parameters: 400B",
  },
  {
    name: "Qubit-Logic-Engine",
    role: "Quantum / Hybrid",
    email: "qubit-logic@api.clarum.ai",
    avatarSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop",
    statusText: "Topology Mapping",
    statusColor: "bg-purple-500",
    glowText: "Experimental",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 200 } }
};

export function ModelsStatusBoard() {
  return (
    <section className="relative w-full bg-black py-24 lg:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Models Under <span className="text-white/40">Evaluation</span>
          </h2>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-16 sm:gap-y-20 justify-items-center"
        >
          {modelsData.map((model) => (
            <motion.div key={model.name} variants={itemVariants} className="w-full max-w-sm">
              <GlassmorphismCard
                name={model.name}
                role={model.role}
                email={model.email}
                avatarSrc={model.avatarSrc}
                statusText={model.statusText}
                statusColor={model.statusColor}
                glowText={model.glowText}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
