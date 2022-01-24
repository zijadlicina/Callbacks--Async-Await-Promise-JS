// Promise = object who give us result of async operations, or a failure of async operations
// Give us super nice syntax of running
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve({user: "zik"})
        reject(new Error("User not logged in!"))    
    }, 2000)
})

promise
    .then(user => console.log(user))
    .catch(err => console.log(err.message))