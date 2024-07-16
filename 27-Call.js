// for explicitly callin the function

const setUserName = function (username) {
    //Some DB Vreification Stuff
    this.username = username
}

const createUser = function (username, email, password) {
    // setUserName(username)//not getting us the username with only this

    setUserName.call(this, username)//call is used to explicitly call the function 
    //this *this* is used inside the brackets to give the reference of the called function

    this.email = email
    this.password = password
}

const user = new createUser("Avdhesh", 'Avdhesh@meta.com', 123)

console.log(user);