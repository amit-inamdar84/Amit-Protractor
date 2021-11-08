//A promise is an object that may produce a single value some time in the future: either a resolved value or rejected error.
//Promises are used to handle asynchronous operations in javascript.
//Each line of code in JS returns a promise.
//3 states of promise - By default it is in unresolved state.
//Unresolved - waiting for something to finish
//Resolved - something finished and went ok
//Rejected - something finished and something went bad.
//Promise object has two properties - promise.then() and promise.catch().
//A resolved promise can be handled by using .then and registering callback functions with it.
//

const { promise } = require("protractor");

//Note: Dont run this code here. Run it in a browser console.
promise = new Promise(() => {
    //Doing this in a browser returns a promise object with pending state.
})

promise = new Promise((resolve, reject) => {
    //Doing this in a browser returns a promise object with fulfilled state.
    resolve();
})

promise.then(() => {
    console.log('Finally finished');
}).then(() => {
    console.log('I am also in');
}).catch(() => {//Runs only when promise is rejected.
    console.log('uh oh!');
})

promise = new Promise((resolve, reject) => {
    //Doing this in a browser returns a promise object with rejected state.
    //Also it displays erro - Uncaught (in promise) undefined which means promise is not handled.
    reject();
})

const url = 'https://jsonplaceholder.typicode.com/posts';
//fetch is used to make a request to an end point.
fetch(url)
.then(response => response.json)
.then((data) => console.log(data));
console.log("-----------------------------------------");

