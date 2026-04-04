import Link from 'next/link';
import { PeopleHero } from '@/components/ui/gradient-bar-hero-section';
import { LeadershipRoster } from '@/components/leadership-roster';

export default function People() {
  return (
    <>
      <PeopleHero />

      <LeadershipRoster />
    </>
  );
}
