// Async code example


console.log('Start');

setTimeout(()=>{
    console.log("we are in other function");
    console.log("do some stuff");
}, 2000);

console.log("End");

// JS read code line by line/ Single threaded language
/* In this situation after 5s our code in "SetTimeout" will log out
    -> our "Callstack" is send this function to "Web Apis stack"
    (also "eventListener" function are being in this stack) */
