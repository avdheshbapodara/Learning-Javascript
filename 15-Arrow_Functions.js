const user = {
    username: "Avdhesh",
    price: "Infinite",
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to the Website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);//this will show empty Object because its running in node enviroment 
//but if we write clg(this) in browser then the global object will be Windows which recognize our clicks ,etc.

function one() {
    let username = "Avdhesh"
    console.log(this.username);
}
// one()

const two = function () {
    console.log("Hello World");
}
// two()

const three = () => {//Arrow Function Declaration
    console.log("Good Morning Gokuldham");
}
// three()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

//it will understand that whatever is written on the right side of the arrow is return statement 
const addTw = (num1, num2) => num1 + num2//Another way to define arrow function if only one line is there 
console.log(addTw(3, 4));

const addT = (num1, num2) => (num1 + num2)//Another way to define arrow function if only one line is there 
console.log(addT(3, 4));

const adT = (num1, num2) => { username: "Avdhesh" }//without parenthesis not working
console.log(adT(3, 4));

const aT = (num1, num2) => ({ username: "Avdhesh" })//with parenthesis 
console.log(aT(3, 4));//so for objects we need parenthesis  

