
// If we want to send some callback functions on 'onFailure' stage
// our code will be really complicated

// Because of this we are using "Promise":
console.log('Start');

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the date");
            resolve ({userEmail: email})
        }, 3000);
    })
}
function getUserVideos(userEmail){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (["video1", "video2", "video3"])
        }, 2000);
    })
}
/*
const user = loginUser("user1@gmail.com", 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos)=>{
        console.log(videos)
    })
}); 
*/

loginUser("user1", 123)
    .then(user => getUserVideos(user.userEmail))
    .then(videos => console.log(videos))

console.log("End");

