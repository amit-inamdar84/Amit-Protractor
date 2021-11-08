//In earlier javascript version we had to concatenate string with variable in return or console.log statement.
//In ES6 we can write variables inside the string.
//Template strings make code more readable and easier.

function getMessage(){
    const year = new Date().getFullYear();
    return "The year is " +year; //Old version style of string concat
}

console.log(getMessage());


function getDate(){
    const todayDate = new Date().getDate();
    return `The date is ${todayDate}`;//Template string in ES6 version.
}

console.log(getDate());