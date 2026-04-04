import Link from 'next/link';

import { AuroraHero } from '@/components/ui/futurastic-hero-section';
import { PublicationsList } from '@/components/publications-list';

export default function Publications() {
  return (
    <>
      <AuroraHero 
        title="Bleeding-Edge Publications"
        subtitle="Access our latest peer-reviewed papers, systemic research, and algorithmic breakthroughs."
        badge="Open Access"
        buttonText="Browse Papers"
      />

      <PublicationsList />
    </>
  );
}
