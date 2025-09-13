// import React from 'react';
// import axios from 'axios';

// type Post = {
//   id: number;
//   title: string;
//   content: string;
// };

// // async function getPost(id : number) {
// //   // Static fake data
// //   const posts = [
// //     { id: 1, title: "First Blog Post", content: "Hello world!" },
// //     { id: 2, title: "Learning Next.js", content: "Next.js is awesome 🚀" },
// //   ];
// //   return posts.find((p) => p.id === id);
// // }

// async function getPost(id: number) {
//   const res = await axios.get<Post[]>("http://localhost:3000/api/posts", {
//     // cache: "no-store",
//   });
//   const posts = await res.data;
//   return posts.find((p) => p.id == id);
// }


// export default async function BlogDetail({ params } : { params: Promise<{ id: string }> }) {
//         // Next.js App Router me, jab aap page.tsx/js banate ho, tab Next.js server component ko run karte waqt params ko ek Promise ke through deta hai.
// // Isliye kabhi-kabhi strict mode me ye bolta hai ki:
// // 👉 params ko directly use mat karo, pehle usko await karo.
//     const { id } = await params;   // 👈 await zaroori hai yaha

//   const post = await getPost(Number(id));

//   if (!post) {
//     return <h1>Post Not Found</h1>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// }


import React from 'react';
import axios from 'axios';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
};

async function getPost(id: number) {
  try {
    const res = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_BLOG_API_URL || 'http://localhost:3000'}/api/posts`);
    console.log('API URL:', process.env.NEXT_PUBLIC_BLOG_API_URL);
  console.log('Full URL:', `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/posts`);
    const posts = await res.data;
    return posts.find((p) => p.id == id);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Related posts data
const relatedPosts = [
  { id: 1, title: "First Blog Post" },
  { id: 2, title: "Learning Next.js" },
  { id: 3, title: "SSR vs SSG vs CSR" }
];

export default async function BlogDetail({ params }: { params: { id: string } }) {
  // Remove the await - params is already resolved by Next.js
  const { id } = params;
  const post = await getPost(Number(id));

  if (!post) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <Link href="/blog" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      {/* Back Button */}
      <div style={{ marginBottom: '20px' }}>
        <Link href="/blog" style={{ 
          color: '#007bff', 
          textDecoration: 'none', 
          fontSize: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          ← Back to Blog
        </Link>
      </div>

      {/* Blog Post Content */}
      <article>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333' }}>
          {post.title}
        </h1>
        
        <div style={{ 
          height: '2px', 
          background: '#007bff', 
          margin: '20px 0', 
          width: '50px' 
        }}></div>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6', 
          color: '#555',
          marginBottom: '30px'
        }}>
          {post.content}
        </p>
      </article>

      {/* Related Posts Section */}
      <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '15px', color: '#333' }}>Related Posts</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {relatedPosts.map((relatedPost) => (
            <Link 
              key={relatedPost.id} 
              href={`/blog/${relatedPost.id}`}
              style={{
                color: '#007bff',
                textDecoration: 'none',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                background: 'white',
                transition: 'all 0.3s ease'
              }}
            >
              {relatedPost.title}
            </Link>
          ))}
        </div>
      </div>

      {/* View All Posts Button */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link 
          href="/blog" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}