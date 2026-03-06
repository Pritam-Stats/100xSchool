// array and objects









// // console.log('Hello World!\n')
// // let n = 5
// // console.log(n*2)

// // for loop
// let ans = ""
// for (let i = 1; i<=10; i++){
//     ans += i + " ";
// };
// console.log(ans);

// /// functions
// function add(a, b){
//     return a+b
// };
// // console.log(add(2,3));

// //// THE CALLBACK
// function calculator(a, b, fnToCalculate) {
//     console.log(fnToCalculate(a,b))
// }

// function sub(a,b){
//     return a-b
// };

// function mul(a,b){
//     return a*b;
// };

// function div(a,b){
//     return a/b;
// };

// calculator(9,5,add)
// calculator(9,4,sub)
// calculator(9,5,mul)
// calculator(9,3, div)


//anonymous functions
c = (function (a, b) {
    return a+b
})

console.log(c(1,2))

//arrow function
add = (a, b) => a+b
console.log(add(2, 3))