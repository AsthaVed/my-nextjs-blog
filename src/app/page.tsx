// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to My Blog</h1>
//       <p>This is a beginner Next.js project 🚀</p>
//     </div>
//   );
// }

import Link from "next/link";
import "./page.module.css";

export default function Home() {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to My <span className="highlight">Developer</span> Blog
        </h1>
        <p className="hero-subtitle">
          Exploring the world of Next.js, React, and modern web development. 
          Join me on this coding journey! 🚀
        </p>
        
        {/* Call to Action Buttons */}
        <div className="hero-buttons">
          <Link href="/blog" className="btn btn-primary">
            Read the Blog
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What You'll Find Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Next.js Tutorials</h3>
            <p>Deep dives into App Router, API Routes, and more.</p>
          </div>
          <div className="feature-card">
            <h3>Project Insights</h3>
            <p>Learnings from my full-stack projects and experiments.</p>
          </div>
          <div className="feature-card">
            <h3>Web Dev Tips</h3>
            <p>Best practices and tricks I pick up along the way.</p>
          </div>
        </div>
      </section>
    </div>
  );
}