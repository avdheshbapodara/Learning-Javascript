class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A New Course was added by ${this.username}`);
    }
}

const temp = new Teacher('Ravi', 'ravi@gmail.com', 'xyz')
// temp.addCourse()
// temp.logMe()//because the User class is whole inherited to Teacher
// console.log(temp instanceof Teacher);
// console.log(temp instanceof User);


//*************************************Static****************************************

class Admin extends User {
    constructor(username, uniqueId) {
        super(username)
        this.uniqueId = uniqueId
    }
    static CreateId() {//To restrict the access of the object we add static
        console.log(`${Math.random()}`);
    }
}

const addd = new Admin('Godho', '12345')
Admin.CreateId()// so by using static we have restricted the access of the object 