export async function GET() {
  // Example static data (could be from DB or external API)
  const posts = [
    { id: 1, title: "First Blog Post", content: "Hello world!" },
    { id: 2, title: "Learning Next.js", content: "Next.js is awesome 🚀" },
    { id: 3, title: "SSR vs SSG vs CSR", content: "Rendering methods explained." },
  ];

  return Response.json(posts);   //Web Fetch API ka built-in Response class hai Response.
}
