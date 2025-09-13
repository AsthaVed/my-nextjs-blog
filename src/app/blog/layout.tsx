// import React from "react";

// export default function BlogLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h2>Blog Layout</h2>
//       <main>{children}</main>
//     </div>
//   );
// }

import React from "react";
import "./blog-styles.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-layout">
      {/* No navbar/footer here - they're already in root layout */}
      <main className="blog-main-content">
        {children}
      </main>
    </div>
  );
}