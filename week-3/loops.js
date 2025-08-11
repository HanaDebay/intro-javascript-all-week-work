// /**
//  * loops iteration/reapting statements
//  * 1. for loop
//  * 2. while loop
//  * 3. do-while loop
//  *
//  */

// //for loop
// //if you know the exact time you loop we use for loop

// //print the first five numbers
// //for(initialize; condition; increament/decrement)

//     for(let i = 0; i <= 5; i++){
//     console.log(i)
// }

// let listOfProduct =["Sofa","Bed","Dining Table","Chair","Drawer"];
// for(let i = 0; i < listOfProduct.length; i++){
//     console.log(`Item ${ i + 1}: ${listOfProduct[i]}`);
// }
// //while
// /**
//  * while(condition ){
//     code
// }
// **/
// stock = 20;
// while( stock > 0){
//     console.log(`Selling Item -- Stock left:${stock}`);
//     stock--;
// }

// /*
// do {
//   // code block to be executed
// } while

// let order;
// let totalStock = 100;
// do{
//  order = Number(prompt(`Enter Order (Avilable stock is: ${totalStock})`))
// }while(order > totalStock){
// window.alert(`Your order has been received`);

// }

// let payment;
// let totalDue = 50000;
// do {
//   order = Number(prompt(`Enter Payment (Totla UGX: ${totalDue}K)`));
// } while (payment > totalDue);
// {
//   window.alert(`Your payment has been received`);
// }


//fixed repetation
let listOfProduct =["Sofa","Bed","Dining Table","Chair","Drawer"];
for(let i = 0; i < listOfProduct.length; i++){
    console.log(`Item ${ i + 1}: ${listOfProduct[i]}`);
}

//while loop repeate until the condition is changed
stock = 20;
while( stock > 0){
    console.log(`Selling Item -- Stock left:${stock}`);
    stock--;
}

//do-while it must run at least ones 

let i = 0;
do{
    console.log(i)
      i++;
}while(i<=5)

// for of loop

let itemSold =["Sofa","Bed","Dining Table","Chair","Drawer"];
for(const item of itemSold){
    console.log(`Sold Item:  ${item}`);
}

const sale ={
    customerName: "Hana",
    product: "Sofa",
    quantity: 2,
    price: 500
}

//for in loop

for(const key in sale){
    console.log(`${key}:${sale[key]}`)
}