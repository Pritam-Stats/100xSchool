/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
    constructor(result = 0) {
        this.result = result
    };

    add(num) {
        this.result = num + this.result;
        return this     //return this enables chaining. now this.result
    }

    subtract(num) {
        this.result = this.result - num; return this
    }

    multiply(num) {
        this.result = this.result * num;
        return this
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Division By zero error")
        }
        this.result = this.result / num;
        return this
    }

    clear() { this.result = 0; return this };

    getResult() { return this.result };

    calculate(exp) {
        if (typeof exp !== "string") {
            throw new Error("Must be string expression");
        }

        //removes all whitespaces in the entire str, g = global \s+ == one or more space. everything inside // is regex cond
        const cleaned = exp.replace(/\s+/g, "");

        // ^ start of str, $ is end of str, + one or more allowed, [everything inside allowed, and special way to write - = \- since general dash use as range]

        // test is a regex method return t/f. so if not withing the accepted exps throw err
        if (!(/^[0-9+\-*/().]+$/.test(cleaned))) {
            throw new Error("Invalid characters found")
        }

        const value = Function(`"use strict"; return (${cleaned}) `)(); //this is the function constructor takes strings and evaluates
        // Function ('return 2+3')() prints 5

        if (typeof value !== 'number' || Number.isNaN(value)) {
            throw new Error("Invalid Expression")
        }
        if (!Number.isFinite(value)) {
            throw new Error("Invalid Expression");
        }

        this.result = value;
        return this
    }
}

let cal = new Calculator();
console.log(cal.calculate("2**3"))


module.exports = Calculator;