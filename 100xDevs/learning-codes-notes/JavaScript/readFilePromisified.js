// // callback aync op

// const fs = require("fs")  //file system lib

// let contents = fs.readFile('a1.txt', 'utf-8', function(err, data) {
//   if (err) {
//     console.log("Some error while reading the file"); //verify by not having the a.txt
//   } else {
//     console.log(data)
//   }

// })

const fs = require("fs");

// let's create the promisified function on top of the fs.readFile func
function fsReadFilePromisified(filename, encoding) {
  return new Promise(function (resolve, reject) {
    //resolve and reject are also functions

    // the following is what the promise will do
    fs.readFile(filename, encoding, (err, data) => {
      //this readFile call will work in the normal callback way
      if (err) {
        reject(err); //here we are not throwing the error now but passing it into the reject fn
      } else {
        resolve(data);
      }
    });
  });
}

// calling a promisified func
fsReadFilePromisified("a1.txt", "utf-8")
  .then(function (data) {
    //then will get executed if resolve (means success)
    console.log(data);
  }) //if success
  .catch(function (err) {
    //catch the error if rejected (failed)
    console.log(`Error while Reading the file \n${err}`);
  }); //if failure
