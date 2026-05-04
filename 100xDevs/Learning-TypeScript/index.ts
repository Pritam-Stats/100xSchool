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
