import Link from 'next/link';

import { AuroraHero } from '@/components/ui/futurastic-hero-section';

export default function Models() {
  return (
    <>
      <AuroraHero 
        title="Foundational AI Models"
        subtitle="Explore our state-of-the-art architectures, from transformer variants to novel quantum-integrated networks."
        badge="V2 Now Live"
        buttonText="View Models"
      />

      {/* Models Grid */}
      <section className="w-full bg-black text-white" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-md)', border: '1px dashed var(--divider-color)', borderRadius: '12px', backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
            <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>Models Under Evaluation</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Our primary foundational models are currently undergoing final safety alignment and red-teaming.
              Public checkpoints and API access will be released sequentially throughout 2026.
            </p>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <Link href="/blog" className="btn btn-outline">Read Technical Updates</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
