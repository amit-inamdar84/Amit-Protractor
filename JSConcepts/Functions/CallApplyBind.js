//Predefined methods in javascript.
//This method invokes a method (function) by specifying the owner object.
//call() method allows an object to use the method (function) of another object.

function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
console.log(sayHello.call(obj)); // Returns "Hello Sandy"
//Next example
var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
  }
          
  var person2 = {age:  54};
  console.log(person.getAge.call(person2));// Returns 54  

//Call accepts arguments
function saySomething(message){
    return this.name + " is " + message;
  }
          
  var person4 = {name:  "John"};
  console.log(saySomething.call(person4, "awesome"));// Returns "John is awesome"   
  

//apply() : The apply method is similar to the call() method. The only difference is that,
//call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}
        
var person4 = {name:  "Peter"};
        
console.log(saySomething.apply(person4, ["smart"]));


//bind() : This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
// Binds the displayDetails function to the person1 object
        
console.log(detailsOfPerson1());

          

