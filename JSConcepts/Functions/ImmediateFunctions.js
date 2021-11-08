//An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
//The first set of parenthesis tells the compiler that the function is not a function declaration, instead, it’s a function expression.
//To invoke the function, we use the second set of parenthesis.

(function(){
    console.log("This is IIF");
})();

function test(){
    console.log("Normal function. Should be invoked.");
}
test();