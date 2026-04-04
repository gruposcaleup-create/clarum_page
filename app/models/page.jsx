import Link from 'next/link';

import { AuroraHero } from '@/components/ui/futurastic-hero-section';
import { ModelsStatusBoard } from '@/components/models-status-board';

export default function Models() {
  return (
    <>
      <AuroraHero 
        title="Foundational AI Models"
        subtitle="Explore our state-of-the-art architectures, from transformer variants to novel quantum-integrated networks."
        badge="V2 Now Live"
        buttonText="View Models"
      />

      <ModelsStatusBoard />
    </>
  );
}
