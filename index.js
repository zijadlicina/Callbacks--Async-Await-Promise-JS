
console.log('Start');

// Example of some server who returns some data
function loginUser(email, password){
    setTimeout(() => {
        console.log("Now we have the date");
        return {userEmail: email}
    }, 3000);
}

const user = loginUser("user1@gmail.com", 123456);
console.log(user);  // user give us 'undefined'

console.log("End");

