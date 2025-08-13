/*
primitive Data types hold single values
primitive data types are imutable(they can not be changed directly)
1. Strings/Text
2. numbers 
    intergers
    big integer 
    decimals 
3. boolean 
    true/false
4. undefined 
5. null 
    let x = null
6. symbol 
    uniqness 

*/
let productName = "timber"//strings we put them in Quotes 
console.log(typeof(productName))
let procuctCost = 3500 
procuctCost = 4000
let transportIsNeede = true
let tableColor
let discount = null
console.log(procuctCost * 2)
/*
Non primitive Data type (they can be changed directly without reassigning the value)
1. Array 
        all arrays are ordered 
        is a list off item
        [numbers]
        [2,4,2.0]
        [string]
        ["sofa","table"]
    
2. object
    in JavaScript evrything is an object 
    productDecription{
    name:"sofa"
    price:2000
    color:"blue"
    }
3. Date
4. Function
*/
let productList = ["sofa","table","cupboard"]
console.log(productList)

let diningTableObject = {
productName: "Dining Table",
quantity:2,
price:350,

}



let paymentType = "cash"
const VAT = 0.05
const PI = 3.14


