//Javascript is Prototype based language
//it supports oops concepts like class and all but behind the scene it is only prototype based language
//it is introduced for the programmers to easily read and write without fundamentally changing the its functionality

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount//we can write like this if we dont want to create new variable
    this.isLoggedIn = isLoggedIn

    return this//if we write new(syntax while calling) then no need to return 
    // it will implicitely return it 
}

// const userOne = User('Avdhesh', 23, true)//without writing new keyword it is overwriting the values without calling the userTwo which will create total mess 
// const userTwo = User('Brijesh', 32, true)

// console.log(userOne);

const userOne = new User('Avdhesh', 23, true)//with new keyword it will create new instance for an individual 
const userTwo = new User('Brijesh', 32, true)

console.log(userOne);
console.log(userTwo);