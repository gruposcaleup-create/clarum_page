import Link from 'next/link';
import { HeroSection02 } from '@/components/ui/hero-02';

export default function Research() {
  return (
    <>
      <HeroSection02 />

      {/* Research Pillars (Interactive Tabs) */}
      <section className="section section-grey" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tabs-container">
            {/* Navigation */}
            <div className="tabs-nav" id="research-tabs-nav">
              <button className="tab-btn active" data-tab="ml">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Advanced Machine Learning
              </button>
              <button className="tab-btn" data-tab="qc">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
                </svg>
                Quantum Computing
              </button>
              <button className="tab-btn" data-tab="hci">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                Human-Computer Interaction
              </button>
            </div>

            {/* Content Area */}
            <div className="tabs-content" id="research-tabs-content">
              {/* Tab Pane ML */}
              <div className="tab-pane active fade-up visible" id="tab-ml">
                <div className="tab-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
                    alt="Machine Learning Research" className="tab-content-img" />
                </div>
                <h2>Advanced Machine Learning</h2>
                <p>
                  Our foundational machine learning research is focused on creating algorithms that generalize
                  across multiple domains with high efficiency. We are pushing the boundaries of generative
                  models, multi-modal perception, and self-supervised architectures to achieve cognitive breakthroughs.
                </p>
                <Link href="/publications" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>View Papers</Link>
              </div>

              {/* Tab Pane Quantum */}
              <div className="tab-pane fade-up" id="tab-qc">
                <div className="tab-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop"
                    alt="Quantum Computing Research" className="tab-content-img" />
                </div>
                <h2>Quantum Computing</h2>
                <p>
                  Our quantum intelligence lab explores algorithm design utilizing qubit topologies. We aim to
                  fundamentally alter computational complexity limits by hybridizing neural networks with quantum
                  states to solve traditionally intractable problems in optimization and molecular simulation.
                </p>
                <Link href="/publications" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>View Papers</Link>
              </div>

              {/* Tab Pane HCI */}
              <div className="tab-pane fade-up" id="tab-hci">
                <div className="tab-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
                    alt="HCI Research" className="tab-content-img" />
                </div>
                <h2>Human-Computer Interaction</h2>
                <p>
                  We redefine how humans interplay with machine intelligence. Through spatial computing,
                  brain-computer interfaces, and deeply empathetic conversational agents, we strive to make
                  technology an extension of the human mind, seamless and universally accessible.
                </p>
                <Link href="/publications" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>View Papers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
