/**
 * Create dataTypes.js
 * file and use the JavaScript typeof
 *  operator to check different data types. Check the data type of each variable
 */
let name = "Fiat"; //string

let isWorking = true; //boolean

let weight; //undefined

let color = null; //Object

console.log(typeof name);
console.log(typeof isWorking);
console.log(typeof weight);
console.log(typeof color);

//Declare four variables without assigning values
let variableOne;
let variableTwo;
let variableThree;
let variableFour;

//Declare four variables with assigned values
let assignedVariableOne = 10;
let assignedVariableTwo = "Hello";
let assignedVariableThree = true;
let assignedVariableFour = [1, 2, 3];

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let personalInformation = {
  firstName: "Hana",
  lastName: "Debay",
  maritalStatus: "Married",
  country: "Uganda",
  age: 40
};
//Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName = "Hana", lastName = "Debay", maritalStatus = "Married", country = "Uganda",age= 40
//Declare two variables myAge and yourAge and assign them initial values and log to the  console
let myAge = 40
let yourAge = 30
console.log("I am " +myAge + " years old.")
console.log("You are "+yourAge + " years old.")