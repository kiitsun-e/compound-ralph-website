const port = process.env.PORT ?? 3000;

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Health check endpoint
    if (path === "/health") {
      return new Response("OK", { status: 200 });
    }

    // Try to serve the file from dist
    const distPath = `./dist${path}`;

    // Try exact path first
    let file = Bun.file(distPath);
    if (await file.exists()) {
      return new Response(file);
    }

    // Try with .html extension
    file = Bun.file(`${distPath}.html`);
    if (await file.exists()) {
      return new Response(file);
    }

    // Try index.html in directory
    file = Bun.file(`${distPath}/index.html`);
    if (await file.exists()) {
      return new Response(file);
    }

    // Fallback to root index.html for SPA routing
    file = Bun.file("./dist/index.html");
    if (await file.exists()) {
      return new Response(file);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://0.0.0.0:${port}`);
