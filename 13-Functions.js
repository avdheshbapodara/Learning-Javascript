// function AddTwoNumbers(Number1,Number2){
    //     console.log(Number1+Number2);
    // }
    
    // AddTwoNumbers(3,5);
    
    // function AddTwoNumbers(Number1, Number2) {
        //     return Number1 + Number2
        // }

        // const result = AddTwoNumbers(3, 5);
        // console.log(result);
        
        function LoginUserMessage(User) {
            if (User === undefined) {
                return "Please enter the User Name"
            }
            return `${User} Just Logged in`
        }
// console.log(LoginUserMessage("Avdhesh"));
// console.log(LoginUserMessage());

function LoginSecondUserMessage(User = "Sam") {//this is used to remove the case of undefined
    return `${User} Just Logged in`
}
// console.log(LoginSecondUserMessage("Avdhesh"));//if any value is given then it will overwrite it
// console.log(LoginSecondUserMessage());//otherwise it will print sam

function CartPrice(value1, value2, ...num1) { //Here ... is rest operator for remaining values 
    return num1;
}

// console.log(CartPrice(200, 300, 400, 500, 600));//so value1 and value2 == 200 & 300 

// const User = {
//     username: "Avdhesh",
//     Price: 199
// }

// function HandleObject(ObjectName) {
//     console.log(`Username is ${ObjectName.username} and Price is ${ObjectName.Price}`);
// }

// HandleObject({
//     username:"Avdhesh",
//     price:1499
// })//Can also print by this way

const MyArray=[100,220,500,700];

function ArraySecondValue(AnyArray){
    return AnyArray[1]
}

// console.log(ArraySecondValue(MyArray));//similar to the Object
console.log(ArraySecondValue([123,456,789,1011]));

