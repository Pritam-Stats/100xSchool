function largestValueKey(obj) {
    let keys = Object.keys(obj);
    let maxKey = keys[0];
    for (let key of keys) {
        maxKey = obj[key] > obj[maxKey] ? key : maxKey;
    } 
    return maxKey
}

console.log(largestValueKey({ a: 10, b: 50, c: 20 }))

// ============================================================

function largestValueKeyUsingReduce(obj) {
    return Object.keys(obj).reduce((maxKey, key) => {
        obj[key] > obj[maxKey] ? key : maxKey
    })
}; // i never assigned maxKey but reduce method will automatically assign the first value to it and start checking from the second value

