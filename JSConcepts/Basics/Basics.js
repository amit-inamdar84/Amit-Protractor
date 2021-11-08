
//By default console.log prints in new line every time it is called.
console.log("First javascript program");

//To print in same line or to print without trailing newline use process.stdout.write
/**
Javascript is a dynamic type language, which means you dont need to specify type of the variable because it
is dynamically used by Jscript engine. We just need to specify var which can hold any data type.
In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time.

To run a javascript program without protractor right click>>Run as>>Node.js Application (Only in eclipse)

*/

//Run a js file in terminal: node filterHelper.js

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

//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.
var y = 234;
var z = y;
//From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.

var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
//In the above example, the assign operator, directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.


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



