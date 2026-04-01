import Link from 'next/link';

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="section section-light" style={{ paddingTop: '140px', paddingBottom: 'var(--space-md)' }}>
        <div className="container fade-up">
          <h1>Blog & News</h1>
          <p style={{ maxWidth: '800px', fontSize: '1.15rem' }}>
            The latest updates, editorial pieces, and announcements from the Clarum Research Lab.
          </p>
        </div>
      </section>

      {/* Hero Featured Article */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hero-article fade-up">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
              alt="Featured Article" className="hero-article-img" />
            <div className="hero-article-content">
              <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>
                Featured
              </span>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 'var(--space-sm)' }}>
                The Future of AGI: Navigating the Complexities of Scale
              </h2>
              <p style={{ fontSize: '1.1rem' }}>
                As models scale into the multi-trillion parameter regime, we explore the fundamental shifts in capabilities, alignment challenges, and the architectural innovations driving this next chapter of AI research.
              </p>
              <Link href="#" className="btn btn-primary">Read Article</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Older Posts Grid */}
      <section className="section section-grey">
        <div className="container fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ marginBottom: 'var(--space-md)' }}>Recent Posts</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            <div className="card">
              <div className="card-image-wrap" style={{ height: '200px' }}>
                <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop"
                  alt="Post" className="card-image" />
              </div>
              <div className="card-content">
                <h4 className="card-title">Open-Sourcing Optima-7B</h4>
                <p className="card-desc">Today we are releasing Optima-7B, a foundational model trained purely on verified qualitative datasets.</p>
                <Link href="#" className="card-link">Read More &rarr;</Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image-wrap" style={{ height: '200px' }}>
                <img src="https://images.unsplash.com/photo-1531297172867-4f4013626d1e?q=80&w=800&auto=format&fit=crop"
                  alt="Post" className="card-image" />
              </div>
              <div className="card-content">
                <h4 className="card-title">Breakthrough in Dexterous Manipulation</h4>
                <p className="card-desc">Our robotics division has achieved a new milestone in zero-shot policy transfer for robot hands.</p>
                <Link href="#" className="card-link">Read More &rarr;</Link>
              </div>
            </div>

            <div className="card card-tech">
              <div className="card-image-wrap" style={{ height: '200px' }}>
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
                  alt="Post" className="card-image" />
              </div>
              <div className="card-content">
                <h4 className="card-title">Advances in Quantum Search</h4>
                <p className="card-desc">How Grover&apos;s algorithm iterations are being optimized realistically in noisy-intermediate scale quantum hardware.</p>
                <Link href="#" className="card-link">Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
