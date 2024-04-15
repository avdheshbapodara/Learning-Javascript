//Object Literals **Not Singleton**

const mySymb = Symbol("Key");//Declaration of Symbol

const JsUser = {
    Name: "Avdhesh",
    "full name": "Avdhesh Bapodara",
    [mySymb]: "MySymbol",//for creating symbol we have to declare symbol and [] syntax is must for symbol
    Age: 19,
    Email: "Avdhesh@gmail.com",
    isLoggedin: false,
    LastLogin: ["Monday", "Thursday", "Sunday"]
}
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);//need to know for accessing the objects like full name
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymb]);

// JsUser.Email = "Avdhesh@Microsoft.com";//for Modifying the values
// Object.freeze(JsUser);//now onwards Modification is not allowed 
// JsUser.Email = "Avdhesh@Meta.com";//Modification Not Applied 
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.Name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());