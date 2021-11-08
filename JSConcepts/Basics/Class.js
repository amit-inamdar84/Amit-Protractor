//Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions.
//They provide a new way of declaring constructor functions in javascript.
//Before ES6, constructor functions were used in place of class.

class Car{
  constructor({title}){//This constructor method will be automatically called when object is created.
    this.title = title;//Initializes the object's property value.
  }

  drive(){//Function inside a class
      return 'vroom';
  }
}

const car = new Car({title:'Toyota'});//Object creation and assigning to a variable.
console.log(car);//In java if we print object it returns address. Here it returns the object property and value.
console.log(car.drive());//Invoking function that is defined inside a class. Same like Java

class Toyota extends Car{
    constructor(options){
      super(options);
      this.color = options.color;
    }

    honk(){
        return 'beep';
    }
}

const toyota = new Toyota({color: 'Red',title: 'Daily drive'});
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
console.log("-------------------------------------");

// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
  return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}


let student1 = new Student("Vivek", 354, "6th", "A");
console.log(student1.getDetails());
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A
console.log("-------------------------------------");

// ES6 version classes
class Student1{
  constructor(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails(){
    return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
  }
}

let student2 = new Student1("Garry", 673, "7th", "C");
console.log(student2.getDetails());
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C

//Key points to remember about classes:
//Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
//A class can inherit properties and methods from other classes by using the extend keyword.
//All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. Error will be thrown if the strict mode rules are not followed.


