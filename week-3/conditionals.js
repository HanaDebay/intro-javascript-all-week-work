//Types of control flow of statment
/**
 * Conditional Statment Decision making
 * If statment
 * if-else statment
 * if-else-if-else chain
 * nested if statment
 * switch statment
 * ternary operator
 * if statment with logical operators in conditions
 *
 */
// //write if some one is an adult u alow the to vote
// let age = prompt("Please Enter Your Age: ");
// age = Number(age);

// if (isNaN(age) ||age < 0) {
//   window.alert("please enter a valid age")
// }else{
//     if(age >=18){
//         window.alert("You are adult u can vote")
//     }else{
//     window.alert("You are a minor can't Vote!")
// }
// }

// //Switch statement

// switch(expression){
//     case value1:
//         //write code when expresiion === value1
//     break
//     case value2:
//          //write code when expresiion === value2
//     break
//     case value3:
//          //write code when expresiion === value3
//     default:
//          //write code non of the code matchs
// // }

// let paymentType = prompt("Enter Payment method: (Cash, Mobile Money, Bank)");

// switch(paymentType){
//     case "Cash":
//         alert("Process cash payment on the counter")
//     break;
//     case "Mobile Money":
//          alert("verify your phone details before delivering")
//     break;
//     case "Bank":
//          alert("Confirm before proceding")
//     break;
//     default:
//        alert("unknown method please check again!")
// }

// //if wood store in ware house
// //if it funtniture dispay in showroom
// let product = prompt("Enter Product Type:(Wood or Furniture)")
// switch(product){
//     case "Wood":
//         alert("Please Store it in Warehouse!")
//     break;
//     case "Furniture":
//          alert("You can see it from Showroom")
//     break;

//     default:
//        alert("Please Enter valid produdt type!")
// }
// //check discount
// //regular nodicount
// //whole sale 15%
// //vip 10%

// // let number = prompt("Enter Number: ")
// switch(true){
//     case number > 0:
//         alert("Number is Positive")
//     break;
//     case number == 0:
//          alert("Number is Zero")
//     break;
//       case number < 0:
//          alert("Number is Negative")
//     break;

//     default:
//        alert("Please Enter valid Number!")
// }

//how can we use the switch to control stock?

// let stockCount = Number(prompt("Enter Number of Products you want: "));
// //stockCount = Number(stockCount);
// console.log("Type of ",typeof(stockCount));
// switch (true) {
//   case stockCount > 10:
//     alert("You are luck this Product is plenty");
//     break;
//   case stockCount > 0 && stockCount <= 10:
//     alert("We are low on stock ");
//     break;
//   case stockCount === 0:
//     alert("We are out of stock");
//     break;

//   default:
//     alert("Invalid product");
// }


//Ternary Operator
//condition ? valueIfTrue : valueIfFalse

let stock = 12 ;

let message = stock > 0 ? "In stock" : "Out of stock"
console.log(message)




//Reading Assignment
//Document Object Model a way of handling html,css and JS
