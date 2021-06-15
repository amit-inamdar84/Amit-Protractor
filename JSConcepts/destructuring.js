//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into
//distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
//In this file, we have example on how to extract properties and value of an object and assign it to new variable.


var expense = {
    type: 'Business',
    amount: '$10'
}
//ES5 way of extracting object property and values.
//var type = expense.type;
//var amount = expense.amount;

//ES6 way. The variable name should be the same as property name in object being accessed.
//const {type} = expense;
//const {amount} = expense;
//console.log({type});
//console.log({amount});

//Another way to make code more compact
const {type,amount} = expense;
console.log({type,amount});

//If we reference a property that does not exist the output will be undefined.
const {test} = expense;
console.log({test});