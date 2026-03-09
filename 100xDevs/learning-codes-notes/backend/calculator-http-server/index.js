/* 
what are supposed to create today
- http servers that supports 4 routes (/sum, /sub, /div, /mul)
- we can use many frameworks for this - express, hono, elysiajs, trpc
    - express is the simplest on all of them but not necessarily the best.

- express is an external dependency, unlike fs which is internal.

- express is created by someone outside of the nodejs community later. so we have to fetch the dependency from the internet
- npm is a package of node
- so we first get the code of express by npm install express, then we can import
*/

const express = require("express");
// some boilerplate code for every express

const app = express(); //initializing app or the http server

//let's create 4 endpoints
//example req: localhost:3000/sum?a=1&b=2   - these are the query param
app.get("/sum", function(req, res) {    //similar callbacks we did earlier like fs.readfile, any request will go into req, and response will be sent by res
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;

    //to return in json form
    // res.json({
    //     ans: sum
    // })

    //lets send a string
    res.send(sum.toString());
})


// let's see how to handle the path param
// http://localhost:3000/sum/1000/2
app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a+b;

    res.send(sum.toString());
})

//multiply

app.get("/multiply/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a * b;

    res.send(sum.toString());
})
/*
// we can do this
app.get("/", function(req, res){
    res.send("<html><b>Welcome to the calculator App</b></b></html>")
})
*/

//but we will simply return a html file.
const path = require("path")
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})



app.listen(3000)    //running on port 3000 got to localhost:3000

//now as soon as i run node index.js a http server will be started and keep running infinitely until i explicitly end it by ^C


