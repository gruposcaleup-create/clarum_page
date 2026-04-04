import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";
import { ArtificialHero } from '../components/ui/artificial-hero';
import { OurVision } from '../components/our-vision';
import GalleryHoverCarousel from '../components/ui/gallery-hover-carousel';

export default function Home() {
  return (
    <>
      {/* Artificial Hero Section */}
      <ArtificialHero />

      {/* Our Vision - Stacked Cards */}
      <OurVision />



      {/* Blue Accent Card Capabilities */}
      <section className="section section-dark bg-black pt-20 lg:pt-32 pb-12 lg:pb-16 relative overflow-hidden text-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container fade-up relative z-10 px-4 sm:px-6" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="mb-20 md:mb-32 flex flex-col items-center text-center gap-6">
            <div className="max-w-4xl flex flex-col items-center">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-6 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-none mb-8">
                What Defines Our Research
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-tight mx-auto">
                Pioneering the intersection of artificial intelligence, quantum mechanics, and human perception.
              </p>
            </div>
          </div>

          {/* Card Curtain Reveal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 w-full max-w-7xl mx-auto">
            
            {/* Card 1 */}
            <CardCurtainReveal className="group h-[400px] md:h-[600px] w-full border border-gray-200 bg-white text-zinc-950 rounded-none shadow-none relative">
              <CardCurtainRevealBody className="flex flex-col h-full z-10 relative">
                <CardCurtainRevealTitle className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                  Foundational <br />
                  Models
                </CardCurtainRevealTitle>
                <CardCurtainRevealDescription className="my-5">
                  <p className="text-sm md:text-base font-normal text-zinc-800 tracking-tight leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    Building large-scale transformer architectures that push the frontier of multi-modal reasoning and generalization across 14+ languages with unprecedented parameter efficiency.
                  </p>
                </CardCurtainRevealDescription>
                <Button
                  variant="secondary"
                  size="icon"
                  className="mt-auto aspect-square rounded-full bg-black text-white hover:bg-gray-800 flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300"
                >
                  <ArrowUpRight size={20} />
                </Button>
              </CardCurtainRevealBody>

              <CardCurtainRevealFooter className="absolute inset-0 h-full w-full z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                  width="100%"
                  height="100%"
                  alt="Foundational Models"
                  className="object-cover size-full rounded-none pointer-events-none"
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
                />
              </CardCurtainRevealFooter>
            </CardCurtainReveal>

            {/* Card 2 */}
            <CardCurtainReveal className="group h-[600px] w-full border border-gray-200 bg-white text-zinc-950 rounded-none shadow-none relative">
              <CardCurtainRevealBody className="flex flex-col h-full z-10 relative">
                <CardCurtainRevealTitle className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                  Quantum <br />
                  Advantage
                </CardCurtainRevealTitle>
                <CardCurtainRevealDescription className="my-5">
                  <p className="text-sm md:text-base font-normal text-zinc-800 tracking-tight leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    Developing hybrid quantum-classical algorithms that solve optimization problems exponentially faster than traditional computation.
                  </p>
                </CardCurtainRevealDescription>
                <Button
                  variant="secondary"
                  size="icon"
                  className="mt-auto aspect-square rounded-full bg-black text-white hover:bg-gray-800 flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300"
                >
                  <ArrowUpRight size={20} />
                </Button>
              </CardCurtainRevealBody>

              <CardCurtainRevealFooter className="absolute inset-0 h-full w-full z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                  width="100%"
                  height="100%"
                  alt="Quantum Advantage"
                  className="object-cover size-full rounded-none pointer-events-none"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                />
              </CardCurtainRevealFooter>
            </CardCurtainReveal>

            {/* Card 3 */}
            <CardCurtainReveal className="group h-[600px] w-full border border-gray-200 bg-white text-zinc-950 rounded-none shadow-none relative">
              <CardCurtainRevealBody className="flex flex-col h-full z-10 relative">
                <CardCurtainRevealTitle className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                  Human-AI <br />
                  Synergy
                </CardCurtainRevealTitle>
                <CardCurtainRevealDescription className="my-5">
                  <p className="text-sm md:text-base font-normal text-zinc-800 tracking-tight leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    Designing adaptive interfaces that enable deeply intuitive collaboration between human cognitive processes and autonomous systems.
                  </p>
                </CardCurtainRevealDescription>
                <Button
                  variant="secondary"
                  size="icon"
                  className="mt-auto aspect-square rounded-full bg-black text-white hover:bg-gray-800 flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300"
                >
                  <ArrowUpRight size={20} />
                </Button>
              </CardCurtainRevealBody>

              <CardCurtainRevealFooter className="absolute inset-0 h-full w-full z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                  width="100%"
                  height="100%"
                  alt="Human-AI Synergy"
                  className="object-cover size-full rounded-none pointer-events-none"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                />
              </CardCurtainRevealFooter>
            </CardCurtainReveal>

          </div>
        </div>
      </section>

      {/* Inside the Lab - Gallery Carousel */}
      <GalleryHoverCarousel />
    </>
  );
}
