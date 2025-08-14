let a = 10;
let b = 5;
//1. Arithmetic Operators: Used for mathematical calculations.
let sum = a + b; // Addition: 15
let difference = a - b; // Subtraction: 5
let product = a * b; // Multiplication: 50
let quotient = a / b; // Division: 2
let remainder = a % b; // Modulus (remainder): 0
let exponent = a ** 2; // Exponentiation (a to the power of 2): 100

//2. Assignment Operators: Assign values to variables.
let x = 10; // Simple assignment

x += 5; // x = x + 5; (x is now 15)
x -= 3; // x = x - 3; (x is now 12)
x *= 2; // x = x * 2; (x is now 24)
x /= 4; // x = x / 4; (x is now 6)
x %= 5; // x = x % 5; (x is now 1)

//3. Comparison Operators: Compare two values and return a boolean (true or false).
let p = 10;
let q = "10";

console.log(p == q); // Loose equality (checks value only): true
console.log(p === q); // Strict equality (checks value and type): false
console.log(p != q); // Loose inequality: false
console.log(p !== q); // Strict inequality: true
console.log(p > 5); // Greater than: true
console.log(p < 15); // Less than: true
console.log(p >= 10); // Greater than or equal to: true
console.log(p <= 9); // Less than or equal to: false

//4. Logical Operators: Combine or modify boolean expressions.
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // Logical AND: false (both must be true)
console.log(isAdult || hasLicense); // Logical OR: true (at least one must be true)
console.log(!isAdult); // Logical NOT: false (inverts the boolean value)

//5. Unary Operators: Operate on a single operand.

let num = 5;
num++; // Increment (num is now 6)
num--; // Decrement (num is now 5)

console.log(typeof num); // typeof (returns the data type): "number"


//6. Ternary (Conditional) Operator: A shorthand for an if-else statement.

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor"; // status is "Adult"
