
// First reslove of this issue: is to call callback function, pass like a parametar
// Callback function -> that's gonna run later
console.log('Start');

// Example of some server who returns some data
function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("Now we have the date");
        callback ({userEmail: email})
    }, 3000);
}

const user = loginUser("user1@gmail.com", 123456, (user) => {
    console.log(user);
}); 
console.log("End");

