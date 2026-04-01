import Link from 'next/link';

export default function Careers() {
  return (
    <>
      <section className="section section-light" style={{ paddingTop: '140px', paddingBottom: 'var(--space-md)' }}>
        <div className="container fade-up">
          <h1>Careers at Clarum</h1>
          <p style={{ maxWidth: '800px', fontSize: '1.15rem' }}>
            Join a global team dedicated to solving the most profound challenges in intelligence. We offer unparalleled computational resources and an uncapped scientific culture.
          </p>
        </div>
      </section>

      <section className="section section-grey" style={{ borderTop: '1px solid var(--divider-color)', paddingTop: 'var(--space-xl)', paddingBottom: 'calc(var(--space-xl) * 2)' }}>
        <div className="container fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ marginBottom: 'var(--space-md)' }}>Open Roles</h3>
          <div style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-md)', border: '1px dashed var(--divider-color)', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>No Open Positions</h4>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
              We don&apos;t have any vacancies at the moment, but we&apos;re always interested in hearing from exceptional individuals. Please check back soon or follow us for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
