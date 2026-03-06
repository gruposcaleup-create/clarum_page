/**
 * Clarum Group - Global Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Viewport Animation (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-up');

  if (fadeElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));
  }

  // 1b. Animated Counter (Stats Section)
  const counterElements = document.querySelectorAll('[data-count]');
  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const duration = 1500; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target + '+';
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // 2. Parallax Effect on Hero Background
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // move background slower than foreground
      heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
    });
  }

  // 3. Image Showcase Gallery Logic (Home Page)
  const galleryMainImg = document.getElementById('gallery-main-img');
  const galleryCaption = document.getElementById('gallery-caption');
  const galleryThumbnailsContainer = document.getElementById('gallery-thumbnails');
  const btnPrev = document.getElementById('gallery-prev');
  const btnNext = document.getElementById('gallery-next');

  if (galleryMainImg && galleryThumbnailsContainer) {
    const galleryData = [
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop",
        caption: "Advanced Robotics Testing Facility"
      },
      {
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=300&auto=format&fit=crop",
        caption: "Neural Network Visualization Center"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
        caption: "Computational Data Processing Core"
      },
      {
        src: "https://images.unsplash.com/photo-1531297172867-4f4013626d1e?q=80&w=1200&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1531297172867-4f4013626d1e?q=80&w=300&auto=format&fit=crop",
        caption: "Hardware Prototyping Workshop"
      }
    ];

    let activeIndex = 0;

    // Initialize Thumbnails
    const renderThumbnails = () => {
      galleryThumbnailsContainer.innerHTML = '';
      galleryData.forEach((item, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === activeIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${item.thumb}" alt="Thumbnail ${index + 1}">`;

        thumb.addEventListener('click', () => {
          if (activeIndex !== index) {
            updateGallery(index);
          }
        });

        galleryThumbnailsContainer.appendChild(thumb);
      });
    };

    const updateGallery = (newIndex) => {
      // Fade out effect
      galleryMainImg.style.opacity = '0';

      setTimeout(() => {
        activeIndex = newIndex;
        galleryMainImg.src = galleryData[activeIndex].src;
        galleryCaption.textContent = galleryData[activeIndex].caption;

        // Update thumbnail active states
        renderThumbnails();

        // Fade in
        const fadeTarget = document.getElementById('gallery-main-img');
        if (fadeTarget) fadeTarget.style.opacity = '1';
      }, 300); // match css transition speed
    };

    if (btnPrev && btnNext) {
      btnPrev.addEventListener('click', () => {
        const newIndex = activeIndex === 0 ? galleryData.length - 1 : activeIndex - 1;
        updateGallery(newIndex);
      });

      btnNext.addEventListener('click', () => {
        const newIndex = activeIndex === galleryData.length - 1 ? 0 : activeIndex + 1;
        updateGallery(newIndex);
      });
    }

    renderThumbnails();
  }

  // 4. Publications AJAX Loading Simulation
  const pubList = document.getElementById('publication-list');
  const spinner = document.getElementById('loading-spinner');

  if (pubList && spinner) {

    // Mock Database of Publications
    const papers = [
      {
        id: 1,
        title: "Scaling Laws for Autoregressive Generative Modeling",
        authors: "Dr. Alan Smith, Jane Doe",
        date: "October 12, 2026",
        topic: "ml",
        year: "2026",
        authorId: "smith",
        abstract: "<p>This paper empirically investigates the scaling laws of autoregressive generative models across multiple modalities. We demonstrate that model performance, measured by cross-entropy loss, scales predictably as a power-law with model size, dataset size, and the amount of compute used for training.</p><p>Furthermore, we identify optimal parameter-to-data allocation strategies, suggesting that current state-of-the-art models are significantly undertrained relative to their size. These findings provide a predictive framework for scaling future foundational models efficiently.</p>"
      },
      {
        id: 2,
        title: "Quantum Entanglement as a Resource for Neural Architecture Search",
        authors: "Wei Zhang",
        date: "September 05, 2026",
        topic: "quantum",
        year: "2026",
        authorId: "zhang",
        abstract: "<p>Neural Architecture Search (NAS) is computationally prohibitive for large-scale models. We propose a novel quantum-classical hybrid algorithm that leverages quantum entanglement to explore the vast topological space of neural network architectures.</p><p>By mapping neural network topologies to quantum states, our approach achieves super-polynomial speedups in identifying optimal architectures compared to classical evolutionary or reinforcement learning algorithms.</p>"
      },
      {
        id: 3,
        title: "Zero-shot Policy Transfer in Dexterous Robot Hands",
        authors: "Jane Doe, Wei Zhang",
        date: "June 22, 2025",
        topic: "robotics",
        year: "2025",
        authorId: "doe",
        abstract: "<p>Achieving human-level dexterity in robotic manipulation remains a formidable challenge, largely due to the sim-to-real gap. We introduce a unified reinforcement learning framework capable of zero-shot policy transfer from simulation to physical hardware.</p><p>Our method utilizes a combination of domain randomization and highly accurate physics simulation of tactile sensors, enabling a multi-fingered robotic hand to perform complex in-hand object reorientation without any real-world fine-tuning.</p>"
      },
      {
        id: 4,
        title: "Self-Supervised Representation Learning for High-Res Computer Vision",
        authors: "Dr. Alan Smith",
        date: "March 10, 2024",
        topic: "cv",
        year: "2024",
        authorId: "smith",
        abstract: "<p>We present a novel self-supervised learning paradigm tailored for ultra-high-resolution imagery (up to 4K). Traditional contrastive learning approaches fail at this scale due to memory constraints and the loss of local contextual features.</p><p>Our methodology employs a sparse attention mechanism and a multi-scale patch-based pretext task. This allows the model to learn robust semantic representations capable of state-of-the-art performance on downstream tasks like exact pixel segmentation and anomaly detection.</p>"
      },
      {
        id: 5,
        title: "Large Language Models as Reasoning Agents",
        authors: "Jane Doe",
        date: "January 14, 2026",
        topic: "nlp",
        year: "2026",
        authorId: "doe",
        abstract: "<p>While LLMs excel at pattern recognition and generation, multi-step logical reasoning remains brittle. This paper introduces 'Thought-Chain Execution', a prompting methodology that forces the model to decompose complex problems into explicit intermediate steps.</p><p>Our empirical results show a 40% absolute improvement in zero-shot accuracy on standard mathematical and symbolic reasoning benchmarks, establishing LLMs as reliable reasoning agents rather than stochastic parrots.</p>"
      }
    ];

    // Modal Elements
    const modal = document.getElementById('paper-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');

    const closeModal = () => {
      if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    };

    if (modalClose && modalBackdrop) {
      modalClose.addEventListener('click', closeModal);
      modalBackdrop.addEventListener('click', closeModal);

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal();
        }
      });
    }

    const openModal = (paperId) => {
      const paper = papers.find(p => p.id === parseInt(paperId));
      if (!paper || !modal) return;

      // Populate Modal
      document.getElementById('modal-topic').textContent = paper.topic.toUpperCase();
      document.getElementById('modal-title').textContent = paper.title;
      document.getElementById('modal-meta').innerHTML = `${paper.authors} &middot; ${paper.date}`;
      document.getElementById('modal-abstract').innerHTML = paper.abstract;

      // Show Modal
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    };

    const renderPapers = (data) => {
      pubList.innerHTML = '';
      if (data.length === 0) {
        pubList.innerHTML = '<p>No publications found matching your criteria.</p>';
        return;
      }

      data.forEach(paper => {
        const item = document.createElement('div');
        item.className = 'pub-card fade-up visible'; // Add visible so it doesn't need to re-trigger observer if already in view

        item.innerHTML = `
          <h3 class="pub-title">${paper.title}</h3>
          <div class="pub-meta">
            ${paper.authors} &middot; ${paper.date}
          </div>
          <div class="pub-actions">
            <button class="btn btn-primary btn-read" data-id="${paper.id}">Read Paper Notes</button>
            <a href="#" class="btn btn-primary" style="background-color: transparent; border-color: var(--divider-color); color: var(--text-primary);">Download</a>
          </div>
        `;
        pubList.appendChild(item);
      });

      // Attach Event Listeners to New Buttons
      const readButtons = pubList.querySelectorAll('.btn-read');
      readButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const paperId = btn.getAttribute('data-id');
          openModal(paperId);
        });
      });
    };

    // Filter Logic
    let currentFilters = {
      topic: 'all',
      year: 'all',
      author: 'all'
    };

    const filterPapers = () => {
      return papers.filter(p => {
        const topicMatch = currentFilters.topic === 'all' || p.topic === currentFilters.topic;
        const yearMatch = currentFilters.year === 'all' || p.year === currentFilters.year;

        // Author filter is simplified for this demo
        const authorMatch = currentFilters.author === 'all' || p.authorId === currentFilters.author || (currentFilters.author === 'doe' && p.authors.includes("Jane Doe"));

        return topicMatch && yearMatch && authorMatch;
      });
    };

    const applyFilters = () => {
      // Hide list, show spinner
      pubList.style.display = 'none';
      spinner.classList.add('active');

      // Simulate network request delay
      setTimeout(() => {
        const filtered = filterPapers();
        renderPapers(filtered);

        spinner.classList.remove('active');
        pubList.style.display = 'flex';
      }, 600); // 600ms fake delay
    };

    // Initial render
    renderPapers(papers);

    // Filter Click Handlers
    const setupFilters = (filterId, filterKey) => {
      const container = document.getElementById(filterId);
      if (!container) return;

      const links = container.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();

          // Update active state class
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          // Set filter value and apply
          currentFilters[filterKey] = link.getAttribute('data-filter');
          applyFilters();
        });
      });
    }

    setupFilters('topic-filter', 'topic');
    setupFilters('year-filter', 'year');
    setupFilters('author-filter', 'author');
  }

  // 5. Interactive Tabs Logic (Research Page)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => {
          p.classList.remove('active');
          p.classList.remove('visible'); // Reset animation state
        });

        // Add active class to clicked button
        btn.classList.add('active');

        // Find corresponding pane and activate
        const targetId = `tab-${btn.getAttribute('data-tab')}`;
        const targetPane = document.getElementById(targetId);

        if (targetPane) {
          targetPane.classList.add('active');

          // Slight delay to allow display:block to apply before triggering fade up animation
          setTimeout(() => {
            targetPane.classList.add('visible');
          }, 10);
        }
      });
    });
  }

});
