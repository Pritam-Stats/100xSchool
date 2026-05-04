
## TypeScript
- To Make the Types Strict (in JS), you need TypeScript



- Bun Guide: https://bun.com/docs/quickstart 

#### Bun's Native Server (similar to http module of node)
```ts
import figlet from "figlet";
import index from './index.html';

console.log("Hello via Bun!");


const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("Bun!"),
    "/index" : index,
    "/figlet" : () => {
      const body = figlet.textSync('Bun');
      return new Response(body);
    }
  }
});

console.log(`Listening on ${server.url}`);

```