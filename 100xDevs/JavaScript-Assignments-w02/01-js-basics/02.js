print = console.log;

let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
let counts = {};

for (let w of arr) {
    if (w in counts) {
        counts[w] += 1
    } else {
        counts[w] = 1;
    }
    
};

print(counts);


///=========================================================================

//version 2
counts = {};
for (let w of arr) {
    counts[w] = (counts[w] || 0) + 1;
}

///=========================================================================

//version 3
// we will reduce the arr, and initialize the acc with a dict
let count = arr.reduce((acc, words) => {
    acc[words] = (acc[words] || 0) + 1
}, {});

print(count)
