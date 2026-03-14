// start creating server here


// can't use express
// create a http server
// listen for different routes
    //post - create/todos/
    //get - todos/
    // get - todos?id=xxx
    //delete - todos?id=xxx
// store in array
// keep track of nums or ids
// response in json

/* todos can be stored like this
let todos = [
  {
    id: 1,
    title: "Study Node",
    description: "Learn HTTP server"
  }
];
*/

// const http = require("node:http")

import http from "node:http";

// const server = http.createServer((req, res) => {
//     res.end("server is running");
// });

// server.listen(3000, 'localhost', () => {
//     console.log("Server is running on port 3000")
// })
// server is on now


import fs from "node:fs";


// this is how app.sendFile works in express
const server = http.createServer(function (req, res) {

    // route 1
    if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Server error inside html file reading");
                return
            }

            res.writeHead(200, { "content-type" : "text/html" });
            res.end(data);
        });
        return
    };

    // route 2
    if (req.method === "GET" && req.url === '/2') {
        const stream = fs.createReadStream('index2.html');
        res.writeHead(200, { 'content-type': 'text/html' });
        stream.pipe(res);
        return;
    }

    // route not found
    res.writeHead(404)
    const img = fs.createReadStream('404.html');
    img.pipe(res);
});

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000")
})



    


