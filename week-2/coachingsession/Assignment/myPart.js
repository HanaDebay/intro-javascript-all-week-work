/**
 *   4. Accessing Array Items Using Index
 * ***** Array elements are accessed using indexes.
 * ***** Indexes start from 0.
 * ***** Use array[index] syntax.
 */

//  ******* Use a single index to Access an element ******* //
const furnitureOne = ["Sofa", "Table", "Drawer"];
console.log(furnitureOne[1]); // Output: "Table"

const paymentTypes = ["Cash", "Cheque", "Bank Overdraft"];
console.log(paymentTypes[0]); // Output: "Cash"

//  ******* Use a Loop to Access a Range of Indexes ******* //

for (let i = 0; i < furnitureOne.length; i++) {
  console.log("Item", i + 1 + ":", furnitureOne[i]);
}

//  ******* Use a loop to access a range (reverse order) ******* //
const productTypes = ["Wood", "Furniture", "Office Supplies"];

for (let i = productTypes.length - 1; i >= 0; i--) {
  console.log("Type:", productTypes[i]);
}
//  ******* Use a for...of loop  ******* //
const salesAgents = ["James", "Agnes", "Musa", "Lydia"];
for (let agent of salesAgents) {
  console.log("Sales Agent: ", agent);
}

//  ******* Use slice() for a Range ******* //
//  ******* to extract part of the array **** //
const topFurnitures = furnitureOne.slice(0, 2); // ["Sofa", "Table"]
console.log(topFurnitures);

// ******** to get last 2 items ******** //
const woodStocks = ["Timber", "Poles", "Hardwood", "Softwood"];
const latestStock = woodStocks.slice(-2);
console.log(latestStock);

// ******** using console.table() ******** //
const today = new Date()
const woodStock = [
  {
    productName: "Timber",
    type: "Hardwood",
    quantity: 50,
    supplier: "Upcountry Co. Ltd",
    dateReceived: "2025-07-20",
  },
  {
    productName: "Poles",
    type: "Softwood",
    quantity: 80,
    supplier: "GreenWood Suppliers",
    dateReceived: "2025-07-22",
  },
  {
    productName: "Hardwood Plank",
    type: "Hardwood",
    quantity: 30,
    supplier: "TimberLand Inc.",
    dateReceived: today,
  },
];

console.table(woodStock);

const hana = new Date()
console.log("Today's Date:",hana)
 const birthday = new Date(1990,0,24)
 console.log(birthday)
 let birthYear = birthday.getFullYear()
 console.log("Your birth Year is: ",birthYear)

const currentYear = today.getFullYear()
let age = currentYear - birthYear;
console.log("Age: ",age)

// const birthday = new Date(1990,1 ,1);
// console.log(birthday.toDateString())




// const today = new Date()
// const currentYear = today.getFullYear();
// let age = currentYear - birthYear;
// console.log(age)



// const addNumber = (a,b)=>a*b;
// console.log(addNumber)

// let numOne = 5;
// numOne ++;
// let numTwo = 10;
// numTwo --;
// let stock = 5;
// if(stock > 0 && ){
//   console.log("Product is available")
// }else{
//   console.log("Out of stock")
// }
// //if (payment 5 items full amount 
// let quantity = 5

function userObject(fullname, email, position){
    return {
        fullname: fullname,
        email: email,
        position: position,
        isLoggedIn: false,
        isMarried: false,
        printInformation: function(){
            return `Full Name: ${fullname}\nE-mail: ${email}\nPosition: ${position};`
        },
        login: function(){
             this.isLoggedIn = true;
             return `${fullname} has logged in!;`
        },
        logout: function(){
            this.isLoggedIn = false;
              return `${fullname} has logged out!;`
        },
        getStatus: function(){
            return `${this.fullname} is currently ${this.isLoggedIn ? "logged In" : "logged out"};`
        },
        // isMarried: function(){
        //     this.isMarried = true
        //     return `${fullname} is married`
        // },
        //  isNotMarried: function(){
        //     this.isMarried = true
        //     return `${fullname} is not married`
        // }

    }

}

let userOne = userObject("Hana Debay","hana.debay@gmail.com","Manager");
let userTwo = userObject("Desire", "desire2025@gmail.com","Software Engineer")
let userThree = userObject("Timothy", "timothy2025@gmail.com","CEO")
console.log(userOne.printInformation());
console.log(userOne.login());
//console.log(userOne.logout());
//console.log(userOne.isMarried());
console.log(userTwo.printInformation())
//console.log(userTwo.isNotMarried())



//find out the differences b/n function declaration and function expression
//what are the limitations of using functions expressions over function declaration 
//the advantages of using function expression over function declaration 