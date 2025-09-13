// import React from 'react'
// import axios from 'axios';
// import Link from 'next/link';

// type Post = {
//   id: number;
//   title: string;
//   content: string;
// };

// // async function getPosts() {
// //   // Example static data (in real app, fetch from API)
// //   return [
// //     { id: 1, title: "First Blog Post" },
// //     { id: 2, title: "Learning Next.js" },
// //   ];
// // }


// async function getPosts(): Promise<Post[]> {
//   const res = await axios.get<Post[]>("http://localhost:3000/api/posts", {
//     // 👇 ye option axios me nahi hota, sirf fetch me hota hai
//     // cache: "no-store", // ensures fresh data (like SSR)
//   });
//   return res.data;
// }

// export default async function BlogPage() {
//   const posts = await getPosts();

//   return (
//     <div>
//       {/* <h1>Blog Posts</h1> */}
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link href={`/blog/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React from 'react'
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
  date?: string;
  category?: string;
};

// Using native fetch for App Router compatibility
async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/posts`, {
      cache: 'no-store', // SSR - fresh data on every request
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();
    
    // Add mock dates and categories for demo
    return posts.map((post: Post, index: number) => ({
      ...post,
      date: new Date(Date.now() - index * 86400000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      category: ['Tutorial', 'Insights', 'News', 'Guide'][index % 4]
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return fallback data
    return [
      { 
        id: 1, 
        title: "Getting Started with Next.js 14", 
        content: "Learn how to set up and build modern web applications with Next.js 14 and the App Router.", 
        date: "Jan 15, 2024", 
        category: "Tutorial" 
      },
      { 
        id: 2, 
        title: "Mastering React Hooks", 
        content: "Deep dive into React Hooks and how to use them effectively in your projects.", 
        date: "Jan 14, 2024", 
        category: "Guide" 
      },
    ];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <div className="blog-header">
        <h1>Developer Blog</h1>
        <p>Insights, tutorials, and thoughts on modern web development</p>
      </div>

      {/* Posts Grid */}
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-card-header">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{post.date}</span>
            </div>
            
            <h2 className="post-title">
              <Link href={`/blog/${post.id}`} className="post-link">
                {post.title}
              </Link>
            </h2>
            
            <p className="post-excerpt">
              {post.content.length > 120 
                ? `${post.content.substring(0, 120)}...` 
                : post.content
              }
            </p>
            
            <div className="post-card-footer">
              <Link href={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="empty-state">
          <h3>No posts yet</h3>
          <p>Check back soon for new articles and tutorials!</p>
        </div>
      )}
    </div>
  );
}
