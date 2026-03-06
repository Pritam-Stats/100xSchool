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

// fsReadFilePromisified("a.txt", "utf-8")
//   .then(function (data) {
//     console.log(data);

//     fsReadFilePromisified("b.txt", 'utf-8')
//         .then((data) => {
//             console.log(data)

//             fsReadFilePromisified('c.txt', 'utf-8')
//                 .then((data) => {
//                     console.log(data)
//                 })
//                 //and go on
//                 .catch((err) => {
//                     console.log("3rd File not found error")
//                 })
//         })

//   })

//consider there won't be any catch

// async function callingMultipleReadFilePromises() {
    // try {
    // let data1 = await fsReadFilePromisified("a.txt", "utf-8");
    // let data2 = await fsReadFilePromisified("b.txt", "utf-8");
    // let data3 = await fsReadFilePromisified("c.txt", "utf-8");

    // console.log(data1);
    // console.log(data2);
    // console.log(data3);
    // } catch (e) {
    // console.log(`Error while reading the file\n ${e}`);
    // }
// }

async function callingMultipleReadFilePromises() {
  const files = [
    { name: "a.txt", promise: fsReadFilePromisified("a.txt", "utf-8") },
    { name: "b.txt", promise: fsReadFilePromisified("b.txt", "utf-8") },
    { name: "c.txt", promise: fsReadFilePromisified("c.txt", "utf-8") },
  ];

  // Wait for all to finish, regardless of success or failure
  const results = await Promise.allSettled(files.map((f) => f.promise));
//   console.log(results)

  results.forEach((result, index) => {
    const fileName = files[index].name;

    if (result.status === "fulfilled") {
      // Success: Print the data
      console.log(`${fileName} content:`, result.value);
    } else {
      // Failure: Print the specific error for this file
      console.log(`Error reading ${fileName}: ${result.reason.message}`);
    }
  });
}

callingMultipleReadFilePromises();

s = 0;
for (let i = 0; i < 1000; i++) {
  s += i;
}
console.log(`For async ops this will return before the file readings ${s}\n`);