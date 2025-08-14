/**
 * 1 Find out the differences between function declarations and function expressions.
 * 
 * 
 * 
 * ****** Function Declaration ******
 * Syntax: define using function keyword followed by function name, parameters in parentheses and the functionnbody in curly braces
 *  */
function calculateTimberCost(pricePerUnit, quantity) {
  return pricePerUnit * quantity;
}

console.log(calculateTimberCost(50000, 3)); // 150000
 /*
 * Hoistion Behavior: Function declarations are hoisted to the top of their scope, meaning you can call them before they are defined.
 *                      _____________________________________________________
 *                      calculateTimberCost() this works even before the function is defined
 *                      _____________________________________________________
 * Naming: always has a name 
 * can be used to define reusable functions globally locally
 * 
 * * ****** Function Expression******
 *                      __________________________________________________________________________
 *                     calculateFurnitureCost() this will bring an error coz add is not a function rather a variable 
 *                      __________________________________________________________________________
 * */
const calculateFurnitureCost = function(price, quantity) {
  const tax = 0.1; // 10% furniture tax
  return (price * quantity) + (price * quantity * tax);
};

console.log(calculateFurnitureCost(200000, 2)); // 440000
/*
 * Not hoisted (in a usable way): Only the variable (calculateFurnitureCost) is hoisted, not the function definition. 
 * So calling it before it's defined causes an error.
 * Can be anonymous or named.
 * Often used in callbacks, closures, or when assigning functions to variables.
 * Not hoisted (in a usable way): Only the variable () is hoisted, 
 * not the function definition. So calling it before it's defined causes an error.
 * 
 * */


/**
 * 2 What are the limitations of using function expressions over function declarations.
 * 
 * */


//Not hoisted:	We can’t call a function expression before it's defined
//Less readable in long code and in long files, named function declarations are easier to scan and debug.
//Harder to debug when anonymous Stack traces in errors may show anonymous if function has no name.
//Cannot be recursive unless named iIf a function expression is anonymous, it can’t call itself.
//May confuse beginners	Function expressions can look like variables holding a function, which may confuse newcomers.



/**
 * 
 * 3 Advantage of using function expressions over function declarations.
 * 
 * */
// //Can be anonymous no need to name the function — useful for inline or temporary logic.
// 2. Used as arguments (callbacks)	Perfect for passing functions into other functions (e.g., map, filter, event handlers).
// 3. Encourages modular code, you can assign different functions to variables conditionally or dynamically.
// 4. Scope control	Keeps function limited to a block or expression — avoids polluting the global scope.
// 5. Useful in closures	You can return a function from another function to retain access to outer variables.
// 6. Works well with arrow functions	Function expressions support concise arrow function syntax.
// 7. Supports IIFEs (Immediately Invoked)	You can define and call a function instantly using a function expression.