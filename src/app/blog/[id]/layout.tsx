import React from "react";
// import "./blog-styles.css";

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <h2>Blog Detail Layout</h2> */}
      <main>{children}</main>
    </div>
  );
}
