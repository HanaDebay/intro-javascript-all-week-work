let samsung ={
    color: "black",
    size: "large",
    type: "S24",
    takePicture: function(){
        return this.type + " 1 + 2 + 3 + snap"
    },
    playMusic: function(){
        return this.type + " play + pause + increase/decrease volume"
    },
    ring: function(){
        return this.type + " sound + vibrate"
    }
}
console.log(samsung.playMusic())

// 
function createPhone(color,size,type){
    return {
        color: color,
        size: size,
        type: type,

         takePicture: function(){
        return this.type + " 1 + 2 + 3 + snap"
    },
    playMusic: function(){
        return this.type + " play + pause"
    },
    ring: function(){
        return this.type + " sound"
    }
    }
}
let phoneOne = createPhone("","",)


// 1. create function to create a userObject 
// 2. create three user using the function
// 3. logout the properties of each user object 
// 4. call the methods of each user object 

function userObject(fullname, email, position){
    return {
        fullname: fullname,
        email: email,
        position: position,
        isLoggedIn: false,
        isMarried: false,
        printInformation: function(){
            return `Full Name: ${fullname}\nE-mail: ${email}\nPosition: ${position}`;
        },
        login: function(){
             this.isLoggedIn = true;
             return `${fullname} has logged in!`;
        },
        logout: function(){
            this.isLoggedIn = false;
              return `${fullname} has logged out!`;
        },
        getStatus: function(){
            return `${this.fullname} is currently ${this.isLoggedIn ? "logged In" : "logged out"}`;
        },
        isMarried: function(){
            this.isMarried = true
            return `${fullname} is married`
        },
         isNotMarried: function(){
            this.isMarried = true
            return `${fullname} is not married`
        }

    }

}

let userOne = userObject("Hana Debay","hana.debay@gmail.com","Manager");
let userTwo = userObject("Desire", "desire2025@gmail.com","Software Engineer")
let userThree = userObject("Timothy", "timothy2025@gmail.com","CEO")
console.log(userOne.printInformation());
console.log(userOne.login());
//console.log(userOne.logout());
console.log(userOne.isMarried());
console.log(userTwo.printInformation())
console.log(userTwo.isNotMarried())

