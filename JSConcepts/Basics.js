
//By default console.log prints in new line every time it is called.
console.log("First javascript program");

//To print in same line or to print without trailing newline use process.stdout.write
/**
Javascript is a dynamic type language, which means you dont need to specify type of the variable because it
is dynamically used by Jscript engine. We just need to specify var which can hold any data type.
To run a javascript program without protractor right click>>Run as>>Node.js Application (Only in eclipse)

*/

//Run a js file in terminal: node filterHelper.js

//var is used in old versions of Javascript. In ES6 it is replaced by let.
//const is used for variables that do not change.
var x = 20;
var name = "XYA";

console.log(x);
console.log(name);

const firstName = "Jane";
//let firstName = "Janet"; This will give run time error as it is already declared as const.
console.log(firstName);

let title = "Software Engineer";
title = "Manager";
console.log(title);

//If else is same as Java. Execute some code based on a condition.
if(x == 10){
	console.log("if code executed");
}

else if(x == 20){
	console.log("else if code executed");
}

else {
	console.log("else code exected");
}

//for loop. Instead of return type we specify var.
for(var i=1; i<=100; i++){
	console.log(i);
}

for(var i=0; i<=100; i=i+5){
	console.log(i);
}

//while loop can be used to wait till an image/loader to disappears. In condition we can specify till image is displayed (true) 
//and in body we can write code to wait. Once condition is false we come out of loop and stop waiting.
//do while loop will execute at least once no matter if condition is false. In automation if we need to click on a button and then check if
//page is loaded or not and the click again on same button if it is not loaded, we use this loop.
var i=1;
while(i<5){
	console.log(i);
	i++;
}

var j = 10;
do{
	console.log(j);
	j++;
}while(j<6)
	
/*Javascript objects:
* JS is object based language rather than object oriented language.
* It is template based and not class based.
 * We dont create class to get objects but we directly create objects.
 * Everything is an object in Javascript.
 * 
 */

 //Adding elements to array dynamically - Two ways are possible
 var colors = ['red','green','blue'];
 var item = [];
  colors.forEach(function(color){
   item[item.length] = color;
});
console.log(item);

var colors = ['red','green','blue'];
var item = [];
 colors.forEach(function(color){
  item.push(color);
});
console.log(item);

//Array concatenation
//arr1.concat(arr2);

//ECMAScript is the standard. Javascript is the implementation.
//ES6 stands for ECMAScript 6 launched in 2015.
//Most featured introduced in ES6 are for easier understanding of code, code optimization.
//Array helper methods: forEach, map, filter, find, every, some, reduce
/*New Features in ES6 - https://www.w3schools.com/js/js_es6.asp
The let keyword
The const keyword
JavaScript Arrow Functions
JavaScript For/of
JavaScript Classes
JavaScript Promises
JavaScript Symbol
Default Parameters
Function Rest Parameter
Array.find()
Array.findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
JavaScript Modules
*/



