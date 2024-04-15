const tinderUser = Object()//Singleton Object
tinderUser.ID = "Key123";
tinderUser.Name = "Pushpa";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const obj1 = {
    id: "34",
    fullname: {
        Firstname: 'Avdhesh',
        Lastname: 'Bapodara'
    }
}
// console.log(obj1.fullname.Firstname);

// const obj2 = { 1: "A", 2: "B" };
// const obj3 = { 3: "A", 4: "B" };

// const obj5 = Object.assign({}, obj2, obj3)
// const obj4 = { ...obj2, ...obj3 };//Use this 
// console.log(obj4);
// console.log(obj5);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//this is very helpful because return type 
// console.log(Object.values(tinderUser));//is array so can perform any operations 

// console.log(tinderUser.hasOwnProperty('isLoggedin'));//Show if the value exist


//**********************Objects de-structure***********************

const course = {
    name: "Coursera",
    PriceOfCourse: "999",
    Topic: "Javascript"
}

const {PriceOfCourse:Price} = course;
// console.log(PriceOfCourse);//so through we dont need to write course.xyz, we have destructured
console.log(Price);//we not need to write whole name we can rename it 