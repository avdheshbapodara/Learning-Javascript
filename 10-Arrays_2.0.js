const Marvel_Heros = ["Thor", "IronMan", "Spiderman"];
const DC_Heros = ["Superman", "Batman", "Flash"];

// Marvel_Heros.push(DC_Heros);//this will add an array inside array
// console.log(Marvel_Heros);

//concat will give a new array while push edits the existing array
// const Assemble=Marvel_Heros.concat(DC_Heros);
// console.log(Assemble);

//we can add multiple arrays through this way, ... will spread all the elements
// const All_Heros=[...Marvel_Heros,...DC_Heros]//easy way
// console.log(All_Heros);

// const First_array=[1,2,3,[4,5],6,7,[8,9,[10,11,12]]];//Ganda sa array
// const Solved_array=First_array.flat(Infinity);//All elements in single array removing nested array
// console.log(Solved_array);


console.log(Array.isArray("Avdhesh"));
console.log(Array.from("Avdhesh"));
console.log(Array.from({ name: "Avdhesh" }));//**We have to specify what should be taken

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3));