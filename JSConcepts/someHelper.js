//This is similar to every helper.
//This helper iterates through an array, based on some condition return true or false, performs OR operation on all boolean values.
//The result is OR operation of all true or false value returned for each element.
//Useful when we need to find if at least one element satisfies a particular condition in an array.

var names = [
    'Alexandria','Matthew','Joe'
];

var result = names.some(function(name){
   return name.length>50;
});

console.log(result);