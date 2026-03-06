const fs = require("fs");
//fsReadFilePromisified
function fsReadFilePromisified(filename, encoding) {
    return new Promise(function (resolve, reject) {
    //resolve and reject are also functions

    // the following is what the promise will do
        fs.readFile(filename, encoding, (err, data) => {//this readFile call will work in the normal callback way
            if (err) {
                reject(err); //here we are not throwing the error now but passing it into the reject fn
            } else {
                resolve(data);
            }
        }); 
    });
}

//fsWriteFilePromisified
// fs.writeFile('b.txt', "Hello World", 'utf-8', (err, msg) => {if (err) {console.log(err)} else {console.log(
//     "File written successfully"
// )}})

function fsWriteFilePromisified(filename, msg) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, msg, function (err, success) {
            if (err) {
                reject(() => console.log("Some error occurred"));
            } else {
                //it's null here
                resolve(() => "Successfully written in the file");
            }
        });
    });
}

//combination of both - we have to read from the a file and write to the b file.
function fsReadAndWritePromisified(fileToRead, encoding, fileToWriteTo) {
    return new Promise(function (resolve, reject) {
        fsReadFilePromisified(fileToRead, encoding)
            .then((content) => {
                (console.log(`file read: ${content}`),
                fsWriteFilePromisified(fileToWriteTo, content).then());
                resolve();
            })
            .catch(
                () => console.log("Some error occurred while reading the file"),
                reject(),
            );
    });
}

// fsReadAndWritePromisified('a.txt', 'utf-8', 'b.txt')
//     .then()

// how do we call it
fsReadAndWritePromisified("a.txt", "utf-8", "b.txt")
    .then(function (data) {
        console.log("resolve called");
    })
    .catch(function (err) {
        console.log(err);
        console.log("Reject called");
    });
