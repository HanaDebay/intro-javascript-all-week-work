/******
 * Functions are reusable block of code designed to perform a particular task.
 * ****** Why Functions? ***********
 * With functions you can reuse code
 * You can write code that can be used many times.
 * You can use the same code with different arguments, to produce different results.
 * Parameters vs. Arguments
 * In JavaScript, function parameters and arguments are distinct concepts:
 * Parameters are the names listed in the function definition.
 * Parameters are the names of the values that will be passed.
 *******/
// function functionName(){
//     //wite any code here
//     //return
//    // console.log
// }
// functionName()

// function functionName(parametr){
//     //wite any code here
//     //return
//    // console.log
// }
// functionName(arguments)

// function addTwoNumbers(){
//  let x = 5;
//  let y = 7;
//  let sum = x + y;
//  return sum;
// }
// console.log(addTwoNumbers())

function addTwoNumbers(x, y) {
  let sum = x + y;
  return sum;
}
console.log(addTwoNumbers(20, 8));
console.log(addTwoNumbers(7, 8));
console.log(addTwoNumbers(13, 24));
console.log(addTwoNumbers(5, 58));
//wite a function to square any number
function squareNumber(x) {
  return (num = x * x);
}
console.log(squareNumber(4));
// console.log(squareNumber(2));
// console.log(squareNumber(8));
// console.log(squareNumber(34));
// console.log(squareNumber(12));

function calculateTotalCost(quantity, unitPrice) {
  const transportFee = 500;
  const taxRate = 0.15;
  let subTotalCost = quantity * unitPrice;
  let tax = subTotalCost * taxRate;
  let total = subTotalCost + transportFee + tax;
  return total;
}
console.log(calculateTotalCost(2, 350000));

function greeting(fullName) {
  return "Hello " + fullName + "!";
}
console.log(greeting("Hana Debay"));

let action = [
  function greet() {
    console.log("Hello");
  },
  function calculate() {
    console.log(1 + 2);
  },
  function thankYou() {
    console.log("Thank you for using our system");
  },
];
action[0]();
action[1]();
action[2]();
action.forEach(function (myfunction) {
  myfunction();
});
let customerName;
let productName;
let quantity;
let cost;
let unitPrice;
let car = {
  name: "fiat",
  model: "corolla",
  color: "black",
  start: function () {
    return this.name + this.model + this.color
  },
  carInfo: function(){
return "the car is started";
  }
};
console.log(car.start());
console.log(car.carInfo());
let sentense = "This JavaScript Course";
let splitSentense = sentense.split(" ");
console.log(splitSentense);