// Task 1: Loop + Condition
// Write a function that prints numbers from 1 to 50:
// Print "Fizz" if number is divisible by 3
// Print "Buzz" if divisible by 5
// Print "FizzBuzz" if divisible by both
// Otherwise print the number

function FizzBuzz(){
    let ans = [];

    for (let i = 1; i<=50; i++){
        if (i%3 === 0 && i%5 === 0){
            ans.push('FizzBuzz');
        }
        else if(i%3 === 0){
            ans.push("Fizz");
        }
        else if (i%5 === 0) {
            ans.push("Buzz");
        }
        else{
            ans.push(i);
        }
    }
    return ans;
}

console.log(FizzBuzz())