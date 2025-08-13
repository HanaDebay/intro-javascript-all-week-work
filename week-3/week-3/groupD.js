//1. Declaration Function
//A named function declared using the function keyword. It can be called before it is defined (hoisted).

function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!

//2. Expression Function
//A function assigned to a variable. It is not hoisted.


const greet = function() {
  console.log("Hello!");
};
greet(); // Output: Hello!

// 3. Anonymous Function
// A function without a name, usually used as a function expression or callback.

setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);


//4. Arrow Function
//A shorter syntax for function expressions introduced in ES6. It does not have its own this.


const greet = () => {
  console.log("Hello!");
};
greet(); // Output: Hello!

//5. Function without a parameter and return
//A function that does not take any inputs or return any value, just performs actions.

function sayHi() {
  console.log("Hi!");
}
sayHi(); // Output: Hi!


// 6. Function returning value
// A function that returns a result using the return keyword.


function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5


// 7. Function with a parameter(s)
// A function that accepts one or more inputs.

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!

// 8. Unlimited number of parameters in arrow function
// Using the rest operator ... to capture multiple parameters.

const sumAll = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sumAll(1, 2, 3, 4)); // Output: 10

//9. Self Invoking Functions (Immediately Invoked Function Expression - IIFE)
// Functions that run immediately after they are defined.

(function() {
  console.log("I run immediately!");
})();

// 10. Scope
// Scope defines where variables and functions are accessible. Functions create a local scope.

function demo() {
  let localVar = "I'm local";
  console.log(localVar);
}
demo(); // Output: I'm local
// console.log(localVar); // Error: localVar is not defined outside the function