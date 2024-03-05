import { Hono } from "hono";
import booksRoute from "./routes/books";


const PORT = 8080;
console.log(`Starting Hono Server. Visit http://localhost:${PORT}/hello`);

const app = new Hono();

app.get("/hello", (c) => {
    return c.json({ message: "Hello, World!" });
});

app.route("/book", booksRoute);

Bun.serve({
    fetch: app.fetch,
    port: PORT,
});

