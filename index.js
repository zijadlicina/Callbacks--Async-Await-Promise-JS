
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

/*
loginUser("user1", 123)
    .then(user => getUserVideos(user.userEmail))
    .then(videos => console.log(videos))
*/

// API automaticaly return us promise
// How we can use this code SYNC later, in which we can use promise like sync way
// Simple and easy syntax to write a async code

async function displayUser(){
    try {
        const loggedUser = await loginUser("user1", 1234);
        console.log(loggedUser.userEmail);
        const videos = await getUserVideos(loggedUser.userEmail);
        console.log(videos);   
    } catch (error) {
        console.log(error)
    }
}

displayUser();

console.log("End");

