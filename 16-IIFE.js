//Immediately Invoked Function Expression(IIFE)

(function addTwo() {//Named IIFE
    console.log("AddToDatabase");
})();//semicolon needed

((num1, num2, num3) => (console.log(num1 + num2 + num3)))(1, 2, 3)//Unnamed IIFE
