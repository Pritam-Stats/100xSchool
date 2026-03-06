function setTimeoutPromisified(delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function timeOuts() {
    await setTimeoutPromisified(1000)
    console.log("1sec has passed")
    await setTimeoutPromisified(3000)
    console.log("another 3sec has passed")
    await setTimeoutPromisified(5000)
    console.log("another 5sec has passed")
}
timeOuts()

//------------------------------------------------------
s = 0
for (let i=0; i<1000; i++) {
    s += 0;
}
//------------------------------------------------------
async function counter(n) {
    for (let i = 1; i<= n; i++) {
        await setTimeoutPromisified(1000)
        console.log(i);
    }
}

counter(10)

console.log(`Verify asynchronous: this should print first. sum = ${s}`)