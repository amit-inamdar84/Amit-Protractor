//var is used in old versions of Javascript. In ES6 it is replaced by let.
//Before the ES6 version of javascript, only the keyword var was used to declare variables.
//With the ES6 Version, keywords let and const were introduced to declare variables.
//const is used for variables that do not change.
//The variables declared with the let keyword in the global scope behave just like the variable declared with the var keyword in the global scope.
//Variables declared in the global scope with var and let keywords can be accessed from anywhere in the code.
//But, there is one difference !
//Variables that are declared with the var keyword in the global scope are added to the window/global object. Therefore, they can be accessed using window.variableName.
//Whereas, the variables declared with the let keyword are not added to the global object, therefore, trying to access such variables using window.variableName results in an error.

//keyword	           const	let	  var
//global scope	       no	  no	  yes
//function scope	     yes	yes	  yes
//block scope	         yes	yes	  no
//can be reassigned	   no	  yes	  yes

var x = 20;
var name = "XYA";

console.log(x);
console.log(name);

//Variables with the const keyword behave exactly like a variable declared with the let keyword with only one difference, any variable declared with the const keyword cannot be reassigned.
const abc = {name:"Vivek"};
//abc = {address: "India"}; // Throws an error
abc.name = "Nikhil"; // No error is thrown
//In the code above, although we can change the value of a property inside the variable declared with const keyword, we cannot completely reassign the variable itself

const firstName = "Jane";
//let firstName = "Janet"; This will give run time error as it is already declared as const.
console.log(firstName);

let title = "Software Engineer";
title = "Manager";
console.log(title);



var variable1 = 23;
let variable2 = 89;
function catchValues(){
  console.log(variable1);
  console.log(variable2);

// Both the variables can be accessed anywhere since they are declared in the global scope
}
catchValues();
console.log(global.variable1); // Returns the value 23. This is returning undefined. Need to check.
console.log(global.variable2); // Returns undefined   


//var vs let in functional scope
//Variables declared in a functional/local scope using var and let keywords behave exactly the same, meaning , they cannot be accessed from outside of the scope.
function varVsLetFunction(){
  let awesomeCar1 = "Audi";
  var awesomeCar2 = "Mercedes";
}
//console.log(awesomeCar1); // Throws an error
//console.log(awesomeCar2); // Throws an error


//In javascript, a block means the code written inside the curly braces {} .
//Variables declared with var keyword do not have block scope. It means a variable declared in block scope {} with the var keyword is the same as declaring the variable in the global scope.
//Variables declared with let keyword inside the block scope cannot be accessed from outside of the block.
{
  var variable3 = [1, 2, 3, 4];
}

console.log(variable3); // Outputs [1,2,3,4]

{
  let variable4 = [6, 55, -1, 2];
}

//console.log(variable4); // Throws error

for(let i = 0; i < 2; i++){
  //Do something
}

//console.log(i); // Throws error

for(var j = 0; j < 2; j++){
  // Do something
}

console.log(j) // Outputs 2





