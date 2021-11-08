//Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.
//When the function randomFunc() runs, it sees that the returning function is using the variable obj1 inside it
//Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.
//This ability of a function to store a variable for further reference even after it is executed, is called Closure.

function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 