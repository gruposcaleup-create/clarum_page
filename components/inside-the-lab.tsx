"use client"

import React from 'react'
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery'

const labGalleryData: GalleryItem[] = [
  {
    common: 'Neural Architecture Lab',
    binomial: 'Transformer Research Wing',
    photo: {
      url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&auto=format&fit=crop&q=80',
      text: 'AI brain visualization with neural networks',
      pos: '50% 40%',
      by: 'DeepMind Visuals',
    },
  },
  {
    common: 'Quantum Processing Unit',
    binomial: 'Hybrid Computing Cluster',
    photo: {
      url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&auto=format&fit=crop&q=80',
      text: 'quantum computing chip with blue glow',
      pos: '50% 50%',
      by: 'IBM Research',
    },
  },
  {
    common: 'Computer Vision Suite',
    binomial: 'Multi-Modal Perception Lab',
    photo: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80',
      text: 'researcher working with computer vision systems',
      pos: '50% 30%',
      by: 'ThisisEngineering',
    },
  },
  {
    common: 'Robotics Testing Bay',
    binomial: 'Autonomous Systems Division',
    photo: {
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=80',
      text: 'white humanoid robot in research facility',
      pos: '50% 25%',
      by: 'Alex Knight',
    },
  },
  {
    common: 'Data Center Core',
    binomial: 'High-Performance Compute',
    photo: {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80',
      text: 'server racks with blue LED lighting',
      pos: '50% 50%',
      by: 'Taylor Vick',
    },
  },
  {
    common: 'NLP Research Floor',
    binomial: 'Language Understanding Unit',
    photo: {
      url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&auto=format&fit=crop&q=80',
      text: 'abstract data visualization on screens',
      pos: '50% 50%',
      by: 'Markus Spiske',
    },
  },
  {
    common: 'Optics & Sensing Lab',
    binomial: 'Photonics Research Division',
    photo: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
      text: 'close-up of circuit board with blue light',
      pos: '50% 50%',
      by: 'Alexandre Debiève',
    },
  },
  {
    common: 'Simulation Chamber',
    binomial: 'Digital Twin Environment',
    photo: {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80',
      text: 'cybersecurity visualization with glowing lines',
      pos: '50% 50%',
      by: 'Adi Goldstein',
    },
  },
]

export const InsideTheLab = () => {
  return (
    <section className="inside-lab-section relative bg-black overflow-hidden">
      <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden relative">

        {/* Header */}
        <div
          className="absolute top-28 z-10 text-center px-6"
        >
          <span
            className="inline-block text-[11px] font-semibold uppercase text-blue-400 mb-5"
            style={{ letterSpacing: '0.35em' }}
          >
            Research Facilities
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white leading-[1.1] mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            Inside the Lab
          </h2>
          <p
            className="max-w-sm mx-auto text-zinc-500 mb-0"
            style={{ fontSize: '0.875rem', lineHeight: '1.6' }}
          >
            Glimpses into our advanced research facilities and active experiments.
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full h-full">
          <CircularGallery
            items={labGalleryData}
            radius={500}
            autoRotateSpeed={0.012}
          />
        </div>

        {/* Bottom hint */}
        <div
          className="absolute bottom-8 z-10 text-zinc-600 text-center"
          style={{ fontSize: '0.625rem', letterSpacing: '0.2em' }}
        >
          <span className="uppercase font-semibold">Scroll to rotate · Keep scrolling to continue</span>
        </div>
      </div>
    </section>
  )
}
