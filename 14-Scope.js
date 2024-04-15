// let a = 10
// const b = 20
// var c = 30

// if (true) {
//     let a = 100
//     const b = 200
//     var c = 300

//     console.log("Local Scope",a);
//     console.log("Local Scope",b);
//     console.log("Local Scope",c);
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username="Avdhesh"

//     function two(){
//         const platform="VSCode"
//         console.log(username);
//     }
//     // console.log(platform);//Cant access the local scope values
//     two()
// }
// one()




console.log(addOne(5));//by this type of declaration it can be accesed above

function addOne(num){
    return num+1;
}


// console.log(addTwo(5));//Error 404! not found :)
//we can acces it after declaration 

const addTwo=function(num){
    return num+2;
}

console.log(addTwo(5));//so now there is no error

