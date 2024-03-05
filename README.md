```
 ____                _   _                   
| __ ) _   _ _ __   | | | | ___  _ __   ___  
|  _ \| | | | '_ \  | |_| |/ _ \| '_ \ / _ \ 
| |_) | |_| | | | | |  _  | (_) | | | | (_) |
|____/ \__,_|_| |_| |_| |_|\___/|_| |_|\___/ 
                                             
```

This project demonstrates the use of Bun in conjunction with Hono to have
a very simple API.

It's based on the YT video of Sam Meech-Ward @meech-ward
(https://youtu.be/uxMADW3CmN4?si=ZMZ69ef0ddmu5NAK)

# Setup Bun Only

## Setup Bun
```bash
# Pull the latest image
docker pull oven/bun

# Test bun's image in a test container with the --version flag
docker run --rm --init --ulimit memlock=-1:-1 oven/bun --version

# Work with an alias
```bash
#                        Host Cont
alias bun="docker run -p 8080:8080 --name "bun-temp-runner" --interactive --tty --rm -v $(pwd):/app -w /app oven/bun bun"
```

## Setup Example Project w/ Bun
Init the Bun project with `bun init`.


### Support for Bun Types
Install the bun types with `bun install -D bun-types`.
Use the provided `tsconfig.json` file.


### Example Script
Prepare a script:
```typescript
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
```

Run it with `bun ./main_bun_only.ts`.
For a watch mode use `bun --watch ./main_bun_only.ts`.

Note: You may need to stop the running container "bun-temp-runner" manually:
```bash
docker stop bun-temp-runner
```

## Setup w/ Hono

Have bun available.
Hono for example also provides an easy solution for streaming data and supports
TSX/JSX.


Install Hono:
```bash
bun install hono
```

### Example Script
Prepare a script:
```typescript
import { Hono } from "hono";


const PORT = 8080;
console.log(`Starting Hono Server. Visit http://localhost:${PORT}/hello`);

const app = new Hono();

app.get("/hello", (c) => {
    return c.json({ message: "Hello, World!" });
});


Bun.serve({
    fetch: app.fetch,
    port: PORT,
});

```
Run with `bun ./main_hono.ts`.



