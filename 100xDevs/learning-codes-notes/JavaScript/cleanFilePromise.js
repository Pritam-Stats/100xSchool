// task is read a file, clean the file, write back to the file
/// approach 1 - VERY BAD APPROACH
fs = require("fs")

function trimMultilineString(str) {
  return str
    .split("\n")    //make a list of all the string lines
    .map((line) => line.trim())     //returns a new array trimmed each line
    .join("\n");        //join back
}   
// synchronous way - the bad way
// function cleanFileSync(filepath, onDone) {
//     const contents = fs.readFileSync(filepath, 'utf-8');
//     // console.log(contents)
//     const trimmedContents = trimMultilineString(contents)
//     // console.log(trimmedContents)
//     fs.writeFileSync(filepath, trimmedContents)

//     onDone();
// }
// cleanFileSync('a.txt', () => console.log("Cleaning Completed"));


// Approach 2 - Old async way - Callback based - IT IS ALSO PERFORMANT BUT 2013 STYLE
// function cleanFile(filepath, cb) {
//     fs.readFile(filepath, 'utf-8', (err, contents) => {
//         if (err) {
//             console.log(`Error while reading the file ${err}`);
//         }
//         else {
//             trimmedContents = trimMultilineString(contents);
//             fs.writeFile(filepath, trimmedContents, () => {
//                 cb();    //call the callback on success of write file
//             });
//         }
//     })
// }

// cleanFile('a.txt', () => console.log("Cleaning Done"))




// Approach 3 - Promisified Version but traditional
function cleanFilePromisified(filepath) {
    return new Promise ((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, contents) => {
            if (err) {
                reject(err);
            }
            else {
                const trimmedContents = trimMultilineString(contents);
                fs.writeFile(filepath, trimmedContents, () => {
                    resolve()
                })

            }
        })
    })
}

// cleanFilePromisified('a.txt')
//     .then(() => console.log("Success"))
//     .catch((err) => console.log(`Rejected : ${err}`));
    

// approach 4 - better promisified call - ASYNC AWAIT
async function main() {
    try {
        await cleanFilePromisified('a.txt');
        console.log("Done cleaning")
    }
    catch (e) {
        console.log(`Error occurred ${e}`)
    }

}

// p = main();
// console.log(p)

async function cleanManyFiles(prefix) {
    for (let i = 1; i< 5; i++) {
        await cleanFilePromisified(prefix + i + ".txt");
    }
    // await cleanFilePromisified(prefix + "1.txt")
    // await cleanFilePromisified(prefix + "2.txt")
    // await cleanFilePromisified(prefix + "3.txt")
    // await cleanFilePromisified(prefix + "4.txt")
    
}

cleanManyFiles('a')
    .then(() => console.log("Cleaning Successful"))
    .catch((err) => console.log(`Some error occurred ${err}`) )
