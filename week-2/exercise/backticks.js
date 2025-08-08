
// let price = 100;
// let quantity = 4;
// let total = `The total cost is ${ price * quantity} shllings`
// console.log(total)


let name = "Hana Debay";
let userLink = "img2.jpg";
let noOfLikes = 40;
let noOfLove = 13;
let todayPost = "Today's Post"
let content = "Every day is a new day!"
let date = new Date()
let post = `
<div class="card" style="width: 18rem;">
  <img src="${userLink}" class="card-img-top" alt="...">
  <div class="card-body">
  <h4 class="card-title">${name}</h4>
    <h5 class="card-title">${todayPost}</h5>
    <h6 class = "post-date">${date}</h6>
    <p class="card-text">${content}</p>
  <i class="bi bi-hand-thumbs-up-fill" style="color: blue">${ noOfLikes}</i> <i class="bi bi-heart-fill" style="color:red">${noOfLove}</i>
   
  </div>
`;


 //document.body.innerHTML = post;

 function userPost(name,userLink, noOfLikes, noOfLove,comment,content, date){
  return{
    name: name,
    userLink:userLink,
    noOfLikes:noOfLikes,
    noOfLove: noOfLove,
    comment: comment,
    content: content, 
    date: new Date(),
    getPersonalInformation: function(){
        return `Name: ${name}`;
    },
    displayContent: function(){
      return this.content
    }
  }
 }
 
 let userOne = userPost("Hana",userLink,10,20,todayPost,date)
 console.log(userOne.getPersonalInformation())
  console.log(userOne.displayContent())