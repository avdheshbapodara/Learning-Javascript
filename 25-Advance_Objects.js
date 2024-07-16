function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2//means function is function but it can be also treated as object 
//array can be also treated as object 

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function User(username, price) {
    this.username = username
    this.price = price
}

User.prototype.increment = function () {//creating own function in prototype
    this.price++//this is used to give reference who has called the function 
}
User.prototype.PrintMe = function () {
    console.log(`the Price is ${this.price}`);
}

const chai = new User('chai', 25)
const StarbucksTea = new User("BrandTea", 500)

chai.PrintMe()

//steps happens after new keyword call
/*
1)New Object is created 
2)Object is linked to the prototype of the constructor function 
3)Constructer is called 
4)new object is returned
*/