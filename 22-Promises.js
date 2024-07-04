// const promiseOne = new Promise(function (resolve, reject) {
//     //Do async task
//     setTimeout(function () {
//         console.log('Async Task Completed');
//         resolve()//connect resolve with .then
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('Promise Consumed');
// })

//************************************************************/

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async Task 2');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('Async task 2 Resolved');
// })

//************************************************************/

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({//generally object     
//             username: 'Avdhesh',
//             email: 'avdheshbapodara@gmail.com'
//         })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);//it means whatever is inside resolve can be fetched in then 
// })

//************************************************************/

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({
//                 username: 'Brijesh',
//                 password: 1234
//             })
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }

//     }, 1000)
// })

// promiseFour.then((user)=>{
//     return user.username
// }).then((myUsername)=>{//Chaining; returned value of the above then is stored in myUsername
//     console.log(myUsername);
// }).catch((error)=>{//catch is for reject 
//     console.log(error);
// }).finally(()=>{
//     console.log('The Promise is either Resolved or Rejected');
// })

//************************************************************/another method

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
                username: 'Javascript',
                password: 1234
            })
        }
        else{
            reject('ERROR: Java broke up with Script')
        }

    }, 1000)
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch{
        console.log(error);
    }
}
consumePromiseFive
