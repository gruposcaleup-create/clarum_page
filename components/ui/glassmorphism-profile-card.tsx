"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Plus, Copy, Zap } from "lucide-react";

interface ComponentProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string; 
  glowText?: string; 
  className?: string;
}

export default function Component({
  name = "Berat Berkay",
  role = "Developer",
  email = "beratberkaygokdemir@gmail.com",
  avatarSrc = "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yc2pLdFl5STR0MkZMcUNKaVNMQVJXRmNBSXIifQ",
  statusText = "Available for work",
  statusColor = "bg-lime-500",
  glowText = "Currently High on Creativity",
  className,
}: ComponentProps) {
  const [copied, setCopied] = useState(false);

  // Derive a local clock text once per minute
  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m}${ampm}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-full max-w-sm mx-auto", className)}
    >
     
      <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[90%] rounded-[28px] bg-[#1618D8]/90 blur-[8px] shadow-[0_40px_100px_-10px_#1618D8] z-0" />

      
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-white/80">
          <Zap className="h-4 w-4" /> {glowText}
        </div>
      </div>

      <Card className={cn(
    "relative z-10 mx-auto w-full max-w-3xl overflow-visible rounded-[20px]",
    "bg-white/10 dark:bg-white/5 backdrop-blur-xl",
    "border border-white/10 border-b-none",
    "shadow-lg text-white hover:shadow-[0_0_30px_#1618D8]"
  )}>
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div>
          </div>

        
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative h-40 w-40 sm:h-52 sm:w-52 shrink-0 overflow-hidden rounded-[20px] ring-2 ring-white/10">
              <img
                src={avatarSrc}
                alt={`${name} avatar`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-3xl">
                {name}
              </h3>
              <p className="mt-0.5 text-sm text-white/60">{role}</p>
            </div>
          </div>

       
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              className="h-12 justify-start gap-3 rounded-2xl bg-white/10 border-white/10 text-white hover:bg-white/20"
            >
              <Plus className="h-4 w-4" /> Try Alpha
            </Button>

            <Button
              variant="outline"
              onClick={handleCopy}
              className="h-12 justify-start gap-3 rounded-2xl bg-white/10 border-white/10 text-white hover:bg-white/20"
            >
              <Copy className="h-4 w-4" /> {copied ? "Copied" : "Request Key"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
