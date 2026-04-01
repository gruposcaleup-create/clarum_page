import Link from 'next/link';
import { PeopleHero } from '@/components/ui/gradient-bar-hero-section';

export default function People() {
  return (
    <>
      <PeopleHero />

      <section className="w-full bg-black text-white" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="container fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ marginBottom: 'var(--space-md)' }}>Team Work</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>

            {/* Person 1: Aldahír Cordova */}
            <div className="card text-center" style={{ padding: 'var(--space-sm)' }}>
              <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--space-sm)', border: '2px solid rgba(0, 240, 255, 0.4)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' }}>
                <img src="/assets/aldahir.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Aldahír Cordova" />
              </div>
              <h4 className="card-title" style={{ marginBottom: '4px' }}>Aldahír Cordova</h4>
              <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                Founder of Clarum Group
              </span>
              <p className="card-desc" style={{ fontSize: '0.9rem' }}>
                Founder of Clarum Group and leading the Clarum Research Lab vision.
              </p>
            </div>

            {/* Person 2: Assem Sabry */}
            <div className="card text-center" style={{ padding: 'var(--space-sm)' }}>
              <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--space-sm)', border: '2px solid rgba(0, 240, 255, 0.4)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' }}>
                <img src="/assets/assem.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Assem Sabry" />
              </div>
              <h4 className="card-title" style={{ marginBottom: '4px' }}>Assem Sabry</h4>
              <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                Co Founder and AI Researcher
              </span>
              <p className="card-desc" style={{ fontSize: '0.9rem' }}>
                AI engineer and researcher specializing in developing AI models.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white py-24 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container fade-up" style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>Build the Future with Us</h2>
          <p>We are constantly seeking brilliant minds in machine learning, mathematics, physically informed neural networks, and systems engineering.</p>
          <Link href="/careers" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>View Open Roles</Link>
        </div>
      </section>
    </>
  );
}
