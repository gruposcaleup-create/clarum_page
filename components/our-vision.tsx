"use client"

import * as React from "react"
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const VISION_POINTS = [
  {
    id: "vision-1",
    title: "Artificial General Intelligence",
    description:
      "We explore the theoretical foundations and practical pathways toward AGI — neural architectures that can reason, generalize, and adapt across diverse cognitive domains with human-like efficiency.",
  },
  {
    id: "vision-2",
    title: "Advanced Vision Models",
    description:
      "Pushing the boundaries of how machines perceive the physical world. From scene understanding to complex temporal reasoning, we develop models that redefine computer vision.",
  },
  {
    id: "vision-3",
    title: "Global AI Trends",
    description:
      "A continuous radar of the most disruptive developments in the global AI landscape. We analyze emerging patterns to keep Clarum at the absolute frontier of innovation.",
  },
  {
    id: "vision-4",
    title: "Clarum Private Lab",
    description:
      "The behind-the-scenes of our proprietary research. We share our challenges, breakthroughs, and the evolution of products being built to solve tomorrow's most complex problems.",
  },
]

export const OurVision = () => {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl min-h-svh place-content-center px-6 text-stone-900 xl:px-12">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="left-0 md:top-32 md:sticky md:h-fit pb-16 pt-12 md:pb-0 md:pt-0">
            <h5 className="text-xs uppercase tracking-[0.3em] font-medium text-stone-400">our vision</h5>
            <h2 className="mb-8 mt-6 text-4xl font-light tracking-tighter text-stone-900 leading-none">
              Exploring the{" "}
              <span className="text-[#0064E0]">frontier</span> of artificial intelligence
            </h2>
            <p className="max-w-prose text-base font-light tracking-tight leading-relaxed text-stone-500">
              Clarum Research Lab is a dedicated space to investigate and pioneer
              the technologies redefining tomorrow. We invite you to join a
              community of curious minds pushing the boundaries of what&apos;s possible.
            </p>
          </div>
          <ContainerScroll className="min-h-[180vh] space-y-8 py-12 md:py-24">
            {VISION_POINTS.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="rounded-2xl border border-stone-200 bg-white p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="mt-2 text-2xl font-medium tracking-tight text-stone-900">
                    {phase.title}
                  </h2>
                  <h3 className="text-3xl font-light text-[#0064E0]">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>

                <p className="text-stone-500 font-light tracking-tight text-base leading-relaxed mb-0">{phase.description}</p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}
