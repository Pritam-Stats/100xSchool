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


import fs from "node:fs";

//home 
function homePage(req, res) {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Server error inside html file reading");
            return
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
    });
};

function secondPage(req, res) {
    const stream = fs.createReadStream('index2.html');
    res.writeHead(200, { 'content-type': 'text/html' });
    stream.pipe(res);
    return;
}
let currId = 1;
let todos = [];
function getTodos(req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify(todos));
}



// this is how app.sendFile works in express
const server = http.createServer(function (req, res) {

    // route 1
    if (req.method === "GET" && req.url === '/') {
        homePage(req, res)
        return
    }

    // route 2
    if (req.method === "GET" && req.url === '/2') {
        secondPage(req, res);
        return;
    }
    
    //route get todo
    if (req.method === "GET" && req.url === '/todos') {
        getTodos(req, res);
        return;
    }

    if (req.method === "POST" && req.url === '/create/todo') {
        let body = ""
        req.on("data", chunk => {
            console.log("received chunk")
            body += chunk.toString();
        });

        req.on("end", () => {
            console.log("all chunks done; parsing body...");
            let parsed; 
            try {
                parsed = JSON.parse(body);
            }
            catch {
                res.writeHead(400, {"Content-Type" : "application/json"});
                res.end(JSON.stringify({error: "Invalid JSON"}));
                return
            }

            const newTodo = {
                id: currId++,
                title: parsed.title,
                description: parsed.description
            }

            todos.push(newTodo);
            res.writeHead(200, { "Content-Type" : "application/json"});
            res.end(JSON.stringify(newTodo));
        })
        return
    }
    

    // route not found
    const img = fs.createReadStream('404.html');
    res.writeHead(404, { "Content-Type" : "text/html"});
    img.pipe(res);
});

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000")
})






