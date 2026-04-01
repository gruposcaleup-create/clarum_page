import Link from 'next/link';

import { AuroraHero } from '@/components/ui/futurastic-hero-section';

export default function Publications() {
  return (
    <>
      <AuroraHero 
        title="Bleeding-Edge Publications"
        subtitle="Access our latest peer-reviewed papers, systemic research, and algorithmic breakthroughs."
        badge="Open Access"
        buttonText="Browse Papers"
      />

      <section className="w-full bg-black text-white" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-2xl)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container pub-layout fade-up" style={{ position: 'relative', zIndex: 1 }}>

          <aside className="sidebar-filter">
            <div className="filter-group">
              <h4 className="filter-title">Topic</h4>
              <ul className="filter-list" id="topic-filter">
                <li><Link href="#" data-filter="all" className="active">All Topics</Link></li>
                <li><Link href="#" data-filter="ml">Machine Learning</Link></li>
                <li><Link href="#" data-filter="cv">Computer Vision</Link></li>
                <li><Link href="#" data-filter="nlp">Natural Language</Link></li>
                <li><Link href="#" data-filter="robotics">Robotics</Link></li>
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">Year</h4>
              <ul className="filter-list" id="year-filter">
                <li><Link href="#" data-filter="all" className="active">Any Year</Link></li>
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">Author</h4>
              <ul className="filter-list" id="author-filter">
                <li><Link href="#" data-filter="all" className="active">All Authors</Link></li>
              </ul>
            </div>
          </aside>

          <main className="pub-main">
            <div className="spinner" id="loading-spinner"></div>
            <div className="pub-list" id="publication-list">
              {/* Items injected by GlobalLogic.jsx */}
            </div>
          </main>
        </div>
      </section>

      {/* Paper Notes Modal */}
      <div id="paper-modal" className="modal">
        <div className="modal-backdrop" id="modal-backdrop"></div>
        <div className="modal-content">
          <button className="modal-close" id="modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="modal-body">
            <span className="modal-topic" id="modal-topic">Topic</span>
            <h2 className="modal-title" id="modal-title">Paper Title</h2>
            <div className="modal-meta" id="modal-meta">Authors & Date</div>
            <div className="modal-abstract" id="modal-abstract">
              {/* Dynamic abstract content */}
            </div>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <Link href="#" className="btn btn-primary">Download PDF</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
