/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const st = performance.now();
    let s = 0;
    for (let i = 1; i<= n; i++) {s+=i}
    const end = performance.now();
    console.log(`Time taken for summing to ${n} is ${end - st} ms`)
    // return 0.01;
}
calculateTime(100)
calculateTime(10000)
calculateTime(1000000000)