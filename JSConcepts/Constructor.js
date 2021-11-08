/* Constructor functions are used to create objects in javascript.
When do we use constructor functions?
If we want to create multiple objects having similar properties and methods, constructor functions are used.
Note- Name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter. */


function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);

/* In the code above, we have created a constructor function named Person.
Whenever we want to create a new object of the type Person, we need to create it using the new keyword: */

var person3 = new Person("Lilly", 17, "female");
console.log(person3);

/* The above line of code will create a new object of the type Person.
Constructor functions allow us to group similar objects. */