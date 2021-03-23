//This helper iterates through an array, based on some condition return true or false, performs AND operation on all boolean values.
//The result is and operation of all true or false value returned for each element.
//Useful when we need to find if all elements satisfy a particular condition in an array.

var computers = [
    {name: 'Apple', ram:16},
    {name: 'Samsung', ram:4},
    {name: 'Dell', ram:32}
];

var result = computers.every(function(computer){
   return computer.ram>=16;
});

console.log(result);