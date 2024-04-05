let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.getDate() + 1);//Month from 0 so adding 1 to remove confusion
// console.log(`Todays day is ${myDate.getDay()} ${myDate.getMonth() + 1} and `)

let MyCreatedDate = new Date(2023, 0, 15, 5, 45)//Month Start from 0
// console.log(MyCreatedDate.toLocaleString());

// let MyNewCreatedDate = new Date("2023-1-24")
// console.log(MyNewCreatedDate.toLocaleString());

// let TimeStamp = Date.now()
// console.log(TimeStamp);//in millisecond
// console.log(MyCreatedDate.getTime());//for comparing getting time in milliseconds

// console.log(Math.floor(Date.now()/1000));//in seconds

const newDate = new Date()

console.log(newDate.toLocaleString("Default", {
   month:"2-digit",
   day:"2-digit"
}))