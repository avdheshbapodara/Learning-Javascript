class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryption() {
        return `${this.password}abc`
    }
    capitalize() {
        return `${this.username.toUpperCase()}`
    }
}

const myUser = new User("Godho", 'godho@qwertyuiop.com', '123')
// console.log(myUser.capitalize());
// console.log(myUser.encryption());

// ********************************************************************************


//This all the above thing is just for the ease of syntax
//Actually there is no such thing like class in javascript in behind the scene(Backend)


//Now i Will Show you the Truth😈😈
//BTS of class


function originalUser(username1, email1, password1) {
    this.username1 = username1
    this.email1 = email1
    this.password1 = password1
}

originalUser.prototype.encryptPassword = function () {
    return `${this.password1}123`;
}
originalUser.prototype.capital = function () {
    return `${this.username1.toUpperCase()}`
}

const noSyntaxSugar = new originalUser('Avdhesh', 'Avdhesh@yahoo.com', 'spam')


console.log(noSyntaxSugar.encryptPassword());
console.log(noSyntaxSugar.capital());

//so this is what happening behind the class execution 
// for the sake of the programmers classes were introduced form ES6