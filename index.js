// Async code example


console.log('Start');
/*
callback function - when data are avalilable send this function in callback to "Callstack"
() => {

}
*/

let items = [1, 2, 3, 4, 5];

// fore_each takes callbacks function
items.forEach((item) => {
    console.log(item);
})

console.log("End");

// Callbacks are not necessary async, they can be sync too