import Link from 'next/link';
import { HeroSection02 } from '@/components/ui/hero-02';
import { ResearchPillars } from '@/components/research-pillars';

export default function Research() {
  return (
    <>
      <HeroSection02 />

      {/* Research Pillars (Interactive Tabs) */}
      <ResearchPillars />
    </>
  );
}
