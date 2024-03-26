//Stack for Primitive ==> Number, String, Boolean
//Heap for Non-Primitive==>Array, Object, Function


//for Primitive it will make copy
let Name = "Avdhesh"
let FullName = Name
FullName = "AvdheshBapodara"

console.log(Name);
console.log(FullName);

//for Non-Primitive it will give reference value (Original Value)
let userOne = {
    email: "user@gmail.com"
}

let userTwo = userOne

userTwo.email = "avdheshbapodara@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);