"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Inside the Lab.",
  items = [
    {
      id: "lab-1",
      title: "Neural Architecture Lab",
      summary:
        "Designing next-generation transformer architectures for multi-modal reasoning across 14+ languages.",
      url: "/research",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "lab-2",
      title: "Quantum Processing Unit",
      summary:
        "Hybrid quantum-classical algorithms solving optimization problems exponentially faster than classical computation.",
      url: "/research",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "lab-3",
      title: "Computer Vision Suite",
      summary:
        "From scene understanding to temporal reasoning — redefining how machines perceive the physical world.",
      url: "/research",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "lab-4",
      title: "Robotics Testing Bay",
      summary:
        "Autonomous systems that navigate, manipulate, and collaborate with humans in unstructured environments.",
      url: "/research",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "lab-5",
      title: "Data Center Core",
      summary:
        "High-performance computing infrastructure powering petaflop-scale training runs for our largest models.",
      url: "/research",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    },
  ],
}: {
  heading?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section className="inside-lab-section py-28 lg:py-36 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Row */}
        <div className="mb-10 flex flex-col justify-between md:mb-16 md:flex-row md:items-end gap-6">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.3em] uppercase text-white/50 mb-5"
            >
              Research Facilities
            </span>
            <h3 className="text-white font-light tracking-tighter leading-tight mb-0" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              {heading}{" "}
              <span className="text-white/50 font-light tracking-tight" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                Glimpses into our advanced research facilities, active
                experiments, and the infrastructure behind our breakthroughs.
              </span>
            </h3>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full border-white/10 text-white hover:bg-white/10 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full border-white/10 text-white hover:bg-white/10 hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              breakpoints: { "(max-width: 768px)": { dragFree: true } },
            }}
            className="relative w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[30%]"
                >
                  <Link
                    href={item.url}
                    className="group block relative w-full h-[340px] md:h-[400px]"
                  >
                    <Card className="overflow-hidden rounded-3xl h-full w-full border-white/[0.06] bg-zinc-950">
                      {/* Image */}
                      <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Text reveal on hover */}
                      <div
                        className="absolute bottom-0 left-0 w-full px-5 pb-5 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-zinc-950/95 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      >
                        <h3 className="text-white font-medium tracking-tight mb-0"
                          style={{
                            fontSize: "1.0625rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-white/70 font-light tracking-tight line-clamp-2 mt-2 mb-0"
                          style={{ fontSize: "0.8125rem", lineHeight: "1.6" }}
                        >
                          {item.summary}
                        </p>
                        <div className="absolute bottom-3 right-3">
                          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/40 group-hover:-rotate-45 transition-all duration-500">
                            <ArrowRight className="size-4" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
