// import React from 'react'
// import Link from "next/link";
// import "./globals.css";


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/blog">Blog</Link>
//         </nav>
//         <main style={{ padding: "20px" }}>{children}</main>
//       </body>
//     </html>
//   );
// }

import React from 'react'
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Modern Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              MyBlog ✨
            </Link>
            <div className="nav-menu">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 My Developer Blog. Built with <strong>Next.js</strong> and deployed on <strong>Vercel</strong>.</p>
        </footer>
      </body>
    </html>
  );
}
