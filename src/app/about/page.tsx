// import React from 'react'

// export default function AboutPage() {
//   return (
//     <div>
//       {/* <h1>About Us</h1> */}
//       <p>This blog is built with Next.js 13 App Router.</p>
//     </div>
//   );
// }

import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About This Blog</h1>
          <p className="hero-subtitle">
            Built with modern technologies to showcase development skills
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-grid">
          {/* Technical Details */}
          <div className="tech-card">
            <h2>🛠️ Technical Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Next.js 14</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h3>Features</h3>
                <div className="tech-tags">
                  <span className="tech-tag">App Router</span>
                  <span className="tech-tag">API Routes</span>
                  <span className="tech-tag">SSR/SSG</span>
                  <span className="tech-tag">Responsive Design</span>
                </div>
              </div>

              <div className="tech-category">
                <h3>Deployment</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Vercel</span>
                  <span className="tech-tag">CI/CD</span>
                  <span className="tech-tag">Performance Optimized</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="highlights-card">
            <h2>🚀 What This Project Demonstrates</h2>
            <div className="features-list">
              <div className="feature-item">
                <h3>Modern Architecture</h3>
                <p>Built with Next.js 14 App Router, showcasing the latest React patterns and best practices.</p>
              </div>

              <div className="feature-item">
                <h3>Full-Stack Capabilities</h3>
                <p>Includes API routes, dynamic routing, and server-side rendering for optimal performance.</p>
              </div>

              <div className="feature-item">
                <h3>Professional Design</h3>
                <p>Responsive layout with modern UI principles and accessibility considerations.</p>
              </div>

              <div className="feature-item">
                <h3>Production Ready</h3>
                <p>Deployed on Vercel with optimized performance, SEO, and developer experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Explore More</h2>
          <div className="cta-buttons">
            <Link href="/blog" className="cta-btn primary">
              Read the Blog
            </Link>
            <Link href="/" className="cta-btn secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}