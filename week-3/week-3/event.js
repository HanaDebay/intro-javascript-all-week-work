//events are actions or occurrences that happen in the browser, often as a result of user interactions or other processes.
//events can also be handelded 
//eventListening and Handling and event
//Event listeners are bounsers 
/**
 User Interactions:
 * click: When a user clicks an element.
 * mouseover: When the mouse pointer moves over an element.
 * keydown, keyup, keypress: When a user presses or releases a key on the keyboard.
 * submit: When a form is submitted.
 * change: When the value of an input element changes.
 Browser-generated Events:
 * load: When a page or an image finishes loading.
 *  resize: When the browser window is resized.
 * scroll: When the user scrolls the page.
 */
//Event is that function 
//JavaScript provides mechanisms to detect these events and execute specific code in response,
//eventhandler call callback function because it's inside function
// let button = document.getElementById("btn")
// button.addEventListener("click", function(){
//     window.alert("You have clicked a button")
// })

// let submitButton = document.getElementById("submit")
// submitButton.addEventListener("click", ()=> window.alert("You have Submitted Sucessfully!"))



let price =  document.getElementById("price").value;
let qty = document.getElementById("qty").value;
let orderForm = document.getElementById("order-form")
let Customer = document.getElementById("Customer")
let selectFurniture = document.getElementById("furniture")
let total = document.getElementById("total");
let calcButton = document.getElementById("calc-btn")
let OrderButton = document.getElementById("order-btn")
function totalCost(){
    let price =  Number(document.getElementById("price").value);
    let qty = Number(document.getElementById("qty").value);
    
    let cost = price * qty;

    total.textContent = `Total Cost: UGX ${cost.toLocaleString()}`;
    
}

calcButton.addEventListener("click",totalCost)
OrderButton.addEventListener("click",totalCost)

//qty.addEventListener("input",totalCost())



// let total = document.getElementById("total");
// let calcBtn = document.getElementById("calcBtn");

// function updateTotal() {
//     let price = Number(document.getElementById("price").value);
//     let qty = Number(document.getElementById("qty").value);

//     let cost = price * qty;
//     total.textContent = `Total: UGX ${cost.toLocaleString()}`;
// }

// calcBtn.addEventListener("click", updateTotal);