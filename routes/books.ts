import { Hono } from "hono";

const books = new Hono();

books.get("/", (c) => c.text("List of books"));
books.get("/:id", (c) => {
    const id = c.req.param("id");
    return c.text(`Book with id ${id}`)
});

export default books;
