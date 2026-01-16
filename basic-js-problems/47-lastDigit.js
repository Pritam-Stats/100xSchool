function lastDigit(num1, num2){
    let l1, l2;
    l1 = num1%10;
    l2 = num2%10;

    if (l1 === l2){
        return `Both has the same last digit ${l1}`;
    }
    else {
        return `The last digits are different ${l1} and ${l2}`;
    }
}

console.log(lastDigit(32, 54782));
console.log(lastDigit(35, 9));