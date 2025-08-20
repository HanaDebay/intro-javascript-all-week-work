// //ES5 Functions (Before 2015)
// In ES5 (ECMAScript 5), functions were defined in two main ways:
//1. Function Declaration

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); 

//2. Function Expression

var multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// ES6 Functions (From 2015 onwards)
// ES6 (ECMAScript 2015) introduced Arrow Functions and Default Parameters, making function writing shorter and more powerful.
// Arrow functions (ES6):
// Arrow functions do not have their own this. Instead, they lexically bind this (they inherit it from their surrounding scope).


// ES5
function PersonES5(name) {
  this.name = name;
  setTimeout(function () {
    console.log("Hello, my name is " + this.name); // undefined (or global object)
  }, 1000);
}

new PersonES5("Hana");

// ES6 (Arrow function)
function PersonES6(name) {
  this.name = name;
  setTimeout(() => {
    console.log(`Hello, my name is ${this.name}`); // Correctly refers to "Hana"
  }, 1000);
}

new PersonES6("Hana");

// Arrow functions are great for callbacks where you want this to remain the same.

//2. Template Literals

// Introduced in ES6, template literals use backticks (`) instead of quotes.
// They allow:

// String interpolation (${expression})

// Multiline strings

// ES5
let name = "Hana";
let greeting = "Hello, " + name + "! Welcome to JavaScript.";
console.log(greeting);

// ES6
let greeting2 = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting2);

// Multiline
let poem = `Roses are red,
Violets are blue,
Template literals
Make life easier for you.`;

console.log(poem);

// 3. Default Parameters

// ES5: You had to manually check if a parameter was undefined and assign a default.

// ES6: You can set default values directly in the function definition.

// ES5
function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name);
}
greet(); // Hello, Guest

// ES6
function greetES6(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetES6(); // Hello, Guest

// 4. ES6 Classes vs ES5 Constructor Functions

/**
 * Before ES6, JavaScript used constructor functions + prototypes for OOP. ES6 introduced class syntax, which is cleaner but still works under the hood with prototypes.
 */
// ES5 Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log("Hi, my name is " + this.name);
};
let p1 = new Person("Hana", 22);
p1.sayHello();

// ES6 Class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
let p2 = new PersonClass("Hana", 22);
p2.sayHello();

// Key differences:

// ES6 class is syntactic sugar over constructor functions.

// Classes support extends for inheritance more cleanly:
