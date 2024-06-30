// ************************For***************************

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner Loop Value ${j}`);        
//     }
// }

// let myArr=['Captian America','Thor','Ironman']
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// for (let index = 0; index < 10; index++) {
//     if(index===5){
//         break;
//     }
//     console.log(index);    
// }

// for (let index = 0; index < 10; index++) {
//     if(index===5){
//         continue;
//     }
//     console.log(index);    
// }

// *********************While*************************

// let i = 0
// while (i == 0) {
//     console.log(`Welcome to the World of While Loop`);
//     break;
// }

// let myArr = [`IronMan`, `Thor`, `Captain America`]
// let arr = 0;
// while (arr < myArr.length) {
//     console.log(`Avengers Assemble ${myArr[arr]}`);
//     arr++;
// }

// let score = 11
// do {
//     console.log(score);
//     score++;
// } while (score < 10);   


// *********************For Of*************************

// const Arr=[1,2,3,4,5]

// for (const i of Arr) {
//     console.log(i);    
// }

// const boring="Hello World!"
// for (const bore of boring) {
//     console.log(bore);
// }


// const games={     //forof loop will not work for the object it will not iterate the object
//     "game1":"NFS",
//     "game2":"Hitman"
// }
// for (const game of games) {
//     console.log(game);
// }


// *********************Forin*************************

// const languages = {//so for the Objects we can use Forin
//     js: "Javascript",
//     cpp: "C++",
//     rb: "Ruby"
// }
// for (const key in languages) {
//     console.log(`${languages[key]} is the Full Form of the ${key}`);
// }

//Forin in Array

// const Arr = ['Thor', 'Ironman', 'Spiderman']
// for (const key in Arr) {
//     // console.log(key);        //Forof will provide Value while Forin will provide Index
//     console.log(Arr[key]);
// }


// *********************Map*************************

const Country = new Map()//Unique And Mantian the Order 

Country.set('IN', 'India')
Country.set('USA', 'United States of America')
Country.set('UK', 'United Kindom')
Country.set('UAE', 'United Arab Emirates')
Country.set('IN', 'India')

// console.log(Country);

// for (const [Code, Name] of Country) {
//     console.log(Code, ":-", Name);
// }


// *********************Foreach*************************

const coding = ['cpp', 'c', 'java', 'python', 'javascript']

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{
//     console.log(item,key,arr);
// })


const MyCoding = [//Objects in Array 
    {
        languageName: "Javascript",
        languageFileName: ".js"
    },
    {
        languageName: "Python",
        languageFileName: ".py"
    },
    {
        languageName: "C++",
        languageFileName: ".cpp"
    }
]

MyCoding.forEach((item) => {
    // console.log(`${item.languageName} :-${item.languageFileName}`);
})

const value = coding.forEach((item) => {
    return item;
})
// console.log(value);   //thus we can't store and return the value using the ForEach 


// ***************************Filter****************************


const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const greater = Nums.filter((val) => {//thus to store and return we will use filter
    return val > 5
})
// console.log(greater);



// ***************************Maps****************************

const qwertyuiop = Nums.map((ind) => {
    return ind + 10
})
// console.log(qwertyuiop);


//********************Concept of Chaining*************************

const newNums = Nums
    .map((num) => num + 5)
    .map((num) => num * 10)
    .map((num) => num - 25)
    .filter((num) => num >= 65)
// console.log(newNums);

//********************Reduce*************************

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce((acc, currVal) => {
    // console.log(`acc: ${acc} currVal: ${currVal}`);
    // console.log(`Sum: ${acc + currVal}`);
    return acc + currVal
}, 0)     //0 mentioned here is the initial value of the acc

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python Course",
        price: 4999
    },
    {
        itemName: "Data Scientist Course",
        price: 8999
    }
]

const cart = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

// console.log(cart);
