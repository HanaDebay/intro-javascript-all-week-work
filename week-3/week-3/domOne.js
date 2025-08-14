//Properties

console.log("Document Title",document.title);
console.log("my file is connected",document.body);
console.log("my file is connected",document.forms);
console.log("URL for",document.URL);


// //Methods
//document.getElementById('title');
let heading = document.getElementById('heading')
console.log(heading);
heading.textContent = "Welcome to MWF";
heading.style.color = 'blue';



let container = document.getElementById('container');
container.innerHTML = "<h2>Quality furniture, naturally!</h2>";
console.log(container)
// //EVENTS
// function clickButton(){
//     document.getElementById('submit').click
// }



// // //document.getElementByTagName()
let subHeadings = document.getElementsByTagName("h2");
console.log(subHeadings)
for(let i = 0; i <= subHeadings.length; i++){
    console.log(subHeadings[i]);
}


// // //Get Document by Class Name
let paragraphs = document.getElementsByClassName("paragraph")
console.log(paragraphs.length);



// //document.querySelector()//works exactly like CSS

let thirdTitle = document.querySelector("h3");
console.log(thirdTitle);
 thirdTitle = document.querySelector("#thirdTitle");
 thirdTitle.style.color="red";
 console.log(thirdTitle);
 thirdTitle = document.querySelector(".thirdTitle");
 console.log(thirdTitle);





// // document.querySelectorAll() //this captures evrything
// let headingsArray = document.querySelectorAll()
// headingsArray[1].className = "Sub Heading";
// headingsArray[1].id = ""
 

// // document.createElement()



