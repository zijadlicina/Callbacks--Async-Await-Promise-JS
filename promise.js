// More async code in the same time

const yt = new Promise(resolve => {
    setTimeout(()=>{
        console.log("getting stuff rom yt");
        resolve({ videos: [1, 2, 3, 4, 5]})
    }, 2000)
})
const fb = new Promise(resolve => {
    setTimeout(()=>{
        console.log("stuff from fb");
        resolve({ user: ["user1", "user2"]})
    }, 5000)
})

// Promise.all(array)
Promise.all([yt, fb])
    .then(result => console.log(result))
// each promise in array start/execute in the same time
//  Note: the result is not going come back until both of the promises are fulfilled
//  (one promise wait second promise to end)