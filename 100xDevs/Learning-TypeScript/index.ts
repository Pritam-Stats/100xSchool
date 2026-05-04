// Hello world

function greet(name: string) {
  console.log(`Hey, ${name}`);
}

greet("Pritam");

// sum fn return ans

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

// Type Interface
interface User {
  name: string;
  age: number;
  id?: null | number; // ? makes the id optional
}

function isLegal(user: User):string {
  return Math.floor(user["age"]) >= 18
    ? `${user["name"]} is allowed`
    : `${user["name"]} is Not Allowed`;
}


const user1: User = {
  name: 'Pritam',
  age: 18.5,

} 

console.log(isLegal(user1));


//delayed call

// giving func as an argument
function delayedCall(fn: () => void, delay: number) : void {
  setTimeout(fn, delay)
}

delayedCall(() => {console.log("Hi there")}, 1000);