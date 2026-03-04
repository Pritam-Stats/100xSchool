const obj = {
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60],
};
let newObj = {};

function sum(arr) {
    let s = 0;
    for (let n of arr) {
        s += n;
    }
    return s;
}
for (let key in obj) {
    // console.log(key)
    newObj[key] = sum(obj[key])
}
console.log(newObj);

//======================================================

//version 2
//object entries returns everything in list
for (let [key, val] of Object.entries(obj)) {
    newObj[key] = val.reduce((acc, curr) => acc + curr, 0);
}
print = console.log;
print(newObj);

//======================================================

//version 3
newObj = {};
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
Object.keys(obj).forEach((key) => {
    newObj[key] = sum(obj[key]);
});

print(newObj);

//======================================================

//version 4 fromEntries
newObj = {};
newObj = Object.fromEntries(Object.entries(obj).map(
    ([key, valArr]) => [key, valArr.reduce((a, c) => a+ c, 0)]
));

//fromEntries takes a entries format and converts to the dictionary
print(newObj);

let arr = [10, 20, 30]
let obj1 = {
    'a' : 1,
    'b' : 2,
    'c' : 3
};

for (x of arr) {print(x)} //returns 10 20 30
for (x in arr) {print(x)} //returns "0" "1" "2"

for (x in obj1) {print(x)} //returns 'a' 'b' 'c'