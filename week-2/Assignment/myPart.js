/**
 *   4. Accessing Array Items Using Index
 * ***** Array elements are accessed using indexes.
 * ***** Indexes start from 0.
 * ***** Use array[index] syntax.
 */

//  ******* Use a single index to Access an element ******* //
const furnitureOne = ["Sofa", "Table", "Drawer","Bed","Dining Table"];
console.log(furnitureOne[1]); // Output: "Table"

const paymentTypes = ["Cash", "Cheque", "Bank Overdraft"];
console.log(paymentTypes[0]); // Output: "Cash"

//  ******* Use a Loop to Access a Range of Indexes ******* //

for (let i = 1; i < furnitureOne.length; i++) {
  console.log("Item", i  + ":", furnitureOne[i-1]);
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
//const furnitureOne = ["Sofa", "Table", "Drawer","Bed","Dining Table"];
const topFurnitures = furnitureOne.slice(1, 4); // ["Sofa", "Table"]
console.log(topFurnitures);

// ******** to get last 2 items ******** //
const woodStocks = ["Timber", "Poles", "Hardwood", "Softwood"];
const latestStock = woodStocks.slice(-1);
console.log(latestStock);

// ******** using console.table() ******** //
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
    dateReceived: "2025-07-25",
  },
];

console.table(woodStock);

