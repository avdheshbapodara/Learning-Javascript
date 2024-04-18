// if(false){
//     console.log("The Condition is True");
// }
// else{
//     console.log("Condition is Not True ");
// }


//for condition checking <,>,<=,==,!=,===,!==


// if (3 !== "3") {
//     console.log("Jdiefw");
// }


// let balance =500;
// if(balance<200){
//     console.log("BAlance is less than 200");
// }
// else if(balance<600){
//     console.log("BAlance is less than 600");
// }
// else if(balance<800){
//     console.log("BAlance is less than 800");
// }
// else{
//     console.log("BAlance is less than 1800");
// }


//{&& => AND} ; {|| => OR} ; {?? => Nullish Coalescing Operator(for null and undefined)}
//{? => Terniary Operator}


// let val1, val2, val3;
// val1 = 5 ?? 10;
// console.log(val1);

// val2 = null ?? 70;
// console.log(val2);

// val3 = undefined ?? 50;//for error handling if data not fetched properly from DB
// console.log(val3);


//Terniary Operator
// syntax   ==>     condition ? True : False

const price = 100
price > 80 ? console.log("Greater than 80") : console.log("Less than 80");



// const month=3
// switch (month) {//switch is used for comparing one value with multiple, can also do it with if else
//     case 1:
//         console.log("January");
//         break;
//     case "Feb"://for comparing it with string
//         console.log("Feburary");
//         break;
//     case 3:
//         console.log("MArch");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Month Not Found");
//         break;
// }


//***********************truthy***********************
// let userEmail = "A@gmail.com"
// if(userEmail){
//     console.log("Got Email");
// }
// else{
//     console.log("Didn't get email");
// }


// falsey values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
// "0", 'false', "(space)", [](Empty array), {}(Empty Object), function(){}


// const emptyArray = []
// if (emptyArray.length === 0) {//for checking empty array
//     console.log("Array is Empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {//for checking empty array
//     console.log("Object is Empty");
// }
