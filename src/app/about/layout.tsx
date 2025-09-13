// import React from "react";

// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h2>About Layout</h2>
//       <main>{children}</main>
//     </div>
//   );
// }

import React from "react";
import "./about-styles.css"; // We'll create this CSS file

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-layout">
      {/* No navbar/footer here - they're already in root layout */}
      <main className="about-main-content">
        {children}
      </main>
    </div>
  );
}