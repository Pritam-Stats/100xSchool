function roundTo5x(num){
    // PROBLEM ASKED - TO ROUND TO NEXT MULTIPLE OF 5
    // 26 ---> 30
    if (num%5 === 0){
        return num;
    };
    let floorMul = Math.floor(num/5) + 1;
    return floorMul*5
    

    ///// MAYBE I UNDERSTOOD THE PROBLEM WRONG

    // let rem = num%5;    //remainder
    // if (rem === 0){
    //     return num;
    // }
    // else if (rem <3){
    //     return (num - rem);
    // }
    // else {
    //     return (num-rem+5)
    // }
}

console.log(roundTo5x(25))
console.log(roundTo5x(26))
console.log(roundTo5x(27))
console.log(roundTo5x(28))
console.log(roundTo5x(29))