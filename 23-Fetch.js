// fetch('https://api.github.com/users/avdheshbapodara')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

//***********************************using async await******************************

async function getUser() {
    try {
        const response = await fetch('https://api.github.com/users/avdheshbapodara')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getUser()

//Fetch user higher priority queue

//whenever fetch keyword is used it works in two parts
//1)it reserve the space in memory and two arrays i)(resolve)onFullfilled)[] ii)(reject)onRejection[]
//not allowed to directly push values, can't access this arrays (private fields)

//2)netwok request is fired using web browser based api or node based api
// we cant directly send the network request we need some resource in between (web browser or node)
//if the response is send then it will go into onFullfilled[]
//if it is not send then it will go into onRejected[]
//errors like 404 error not found will also go into onFullfilled[] because
//network pe request gai tabhi to pata chala ke 404 aya hai


//we will get some function in the arrays through which we can get data
