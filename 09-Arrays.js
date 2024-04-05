const myArray = [0, 1, 2, 3, 4]
// myArray.push(5);
// myArray.pop();

// myArray.unshift(9);//for adding values to array stating
// myArray.shift();//for removing values form array stating

// console.log(myArray.includes(4));//boolean
// console.log(myArray.indexOf(4));

// const arr = myArray.join();//convert array into string
// // console.log(typeof arr);

// console.log(myArray);
// console.log(arr);

const A = [0, 1, 2, 3, 4, 5];
console.log("Original Array = ", A);

const B = A.slice(1, 3);//Slice does not changes the original array
console.log(B);
console.log("Slice = ", A);

const C = A.splice(1, 3);//splice Removes the elements from the Original array
console.log(C);
console.log("Splice = ", A);


//so in slice and splice main diffrence is that slice dont include the element 
//of the number written on last and dont affect the original array 

//while splice will include the element and remove the elements from the array