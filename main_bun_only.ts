const PORT = 8080;
console.log(`Starting Bun Only Server. Visit http://localhost:${PORT}`);

Bun.serve({
    fetch: (request: Request) => {
        return new Response("Hello, World!", {
            headers: { "content-type": "text/plain" },
        });
    },
    port: PORT,
});

