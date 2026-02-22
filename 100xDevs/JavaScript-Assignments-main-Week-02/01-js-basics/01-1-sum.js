let arr = [1,2,3]
let total = arr.reduce((prevSum, currValue) => prevSum + currValue, 0)
console.log(total)

function sum(arr) {
    return arr.reduce((prevSum, currValue) => prevSum+currValue)
}

console.log(sum([10,20,30]));

console.log([1, 2, 3, 4].reduce((acc, curr) => acc - curr, 10));//0
console.log([1, 2, 3, 4].reduce((acc, curr) => acc - curr));    //-8