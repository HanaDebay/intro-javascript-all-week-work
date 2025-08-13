/**
 *  1. How to Create an Empty Array
 * ***** An empty array is a container with no initial elements.
 * ***** It is often used when you want to add items later.
 */


//  ******* Using Literal Syntax ******* //
const sales = [];
console.log(sales); // Output: []

//  ******* Using Array Constructor ******* //

let woodStock = new Array(); 
console.log(woodStock); // Output: []

/**
 *   2. How to Create an Array with Values
 * ***** Arrays can hold multiple values of any type.
 * ***** Values are enclosed in square brackets [].
 */

// ******** Using square brackets ******* //
const furnitureList = ["Sofa", "Table", "Drawer"];
let suppliers = ["Timber World", "Upcountry Co", "Furniture Hub"];
console.log(suppliers[0])
for(let i =0; i<=2;i++){
  console.log(suppliers[i])
}

//  ******* Using Array Constructor ******* //

const salesAgents = new Array("James", "Agnes", "Musa");

let emptyStock = new Array(3); 


/**
 *   3. Creating an Array Using split()
 * ***** split() turns a string into an array.
 * ***** We provide a separator (like space or comma).
 * ***** Useful when dealing with CSV or sentences.
 */
//  ******* Splitting by space ******* //

let raw = "Sofa Table Drawer";
let furniture = raw.split(" "); // ["Sofa", "Table", "Drawer"]

//  ******* Splitting by comma ******* //

let woodItems = "Timber,Poles,Hardwood,Softwood";
let woodArray = woodItems.split(","); // ["Timber", "Poles", "Hardwood", "Softwood"]

//  ******* Splitting each character ******* //
let code = "MWF";
let characters = code.split(""); // ["M", "W", "F"]

//  ******* Replacing character  ******* //
let input = "Sofa,Bed,Table";
let modified = input.replace("Bed", "Double Bed").split(","); // ["Sofa", "Double Bed", "Table"]
//"Sofa,Double Bed,Table"

input = "Sofa,Bed,Table".split("e");
console.log(input);

/**
 *   4. Accessing Array Items Using Index
 * ***** Array elements are accessed using indexes.
 * ***** Indexes start from 0.
 * ***** Use array[index] syntax.
 */

//  ******* Use a single index to Access an element ******* //
const furnitureOne = ["Sofa", "Table", "Drawer"];
console.log(furnitureOne[1]); // Output: "Table"

//  ******* Use a Loop to Access a Range of Indexes ******* //

for (let i = 0; i < furnitureOne.length; i++) {
  console.log(furnitureOne[i]);
}

//  ******* Use slice() for a Range ******* //

const topFurnitures = furnitureOne.slice(0, 2); // ["Sofa", "Table"]

/**
 *   5. Modifying Array Elements
 * ***** We can change an element by assigning a new value to an index.
 * ***** Array items are mutable.
 * ***** Direct assignment works.
 */
let furnitureTwo = ["Sofa", "Table", "Drawer","TV Stand","Wardrobe"];
furnitureTwo[2] = "Cupboard"; // Replaces "Drawer" with "Cupboard"

/**
 *   6.  Array Methods
 * ***** Arrays come with built-in methods.
 * ***** These help in adding, removing, or transforming data.
 * ***** Common methods: push, pop, join, slice, length, etc.
 */
let furnitureThree = ["Sofa", "Table", "Drawer","Bed","Coffee Table","Dining Table"];


//  ******* Add an item  ******* //  
furnitureThree.push("Dressing Table");
console.log(furnitureThree); 
/*[
  'Sofa',
  'Table',
  'Drawer',
  'Bed',
  'Coffee Table',
  'Dining Table',
  'Dressing Table'
]*/

// ******** Remove last item ******* //
furnitureThree.pop(); // [ 'Sofa', 'Table', 'Drawer', 'Bed', 'Coffee Table', 'Dining Table' ]
console.log(furnitureThree); 

// ********  Count elements ******** //
console.log(furnitureThree.length); // 6

// ******** Rearranging alphabetically ****** //
furnitureThree.sort();
console.log(furnitureThree); // [ 'Bed', 'Coffee Table', 'Dining Table', 'Drawer', 'Sofa', 'Table' ]

// ******** Reverse the order ******* //
furnitureThree.reverse();
console.log(furnitureThree); // [ 'Table', 'Sofa', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]

// ******** Remove from the beginning ******** //
furnitureThree.shift(); // [ 'Sofa', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]
console.log(furnitureThree); 


// ******** Add to the beginning ******** //
furnitureThree.unshift("Bookshelf");
console.log(furnitureThree); 
/*[
  'Bookshelf',
  'Sofa',
  'Drawer',
  'Dining Table',
  'Coffee Table',
  'Bed'
]*/

// ******** Join items ******* //
let text = furnitureThree.join(" - "); // Bookshelf - Sofa - Drawer - Dining Table - Coffee Table - Bed
console.log(text); 

// ******** Remove elements ****** //
furnitureThree.splice(1, 1); //Remove the second index-element
console.log(furnitureThree); //[ 'Bookshelf', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]

// ******** Add elements ****** //
furnitureThree.splice(1, 0, "Shoe Rack"); //Add an element without removing an element
console.log(furnitureThree); 

// [
//   'Bookshelf',
//   'Shoe Rack',
//   'Drawer',
//   'Dining Table',
//   'Coffee Table',
//   'Bed'
// ]


