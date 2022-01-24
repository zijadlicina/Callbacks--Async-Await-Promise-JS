
// First reslove of this issue: is to call callback function, pass like a parametar
// Callback function -> that's gonna run later
console.log('Start');

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("Now we have the date");
        callback ({userEmail: email})
    }, 3000);
}
function getUserVideos(userEmail, callback){
    setTimeout(() => {
        callback (["video1", "video2", "video3"])
    }, 2000);
}

const user = loginUser("user1@gmail.com", 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos)=>{
        console.log(videos)
    })
}); 
console.log("End");

