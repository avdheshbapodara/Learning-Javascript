//Object Literals **Not Singleton**

const JsUser={
    Name:"Avdhesh",
    "full name":"Avdhesh Bapodara",
    Age: 19,
    Email:"Avdhesh@gmail.com",
    isLoggedin:false,
    LastLogin:["Monday", "Thursday", "Sunday"]
}
console.log(JsUser.Email);
console.log(JsUser["Email"]);//need to know for accessing the objects like full name
console.log(JsUser["full name"]);