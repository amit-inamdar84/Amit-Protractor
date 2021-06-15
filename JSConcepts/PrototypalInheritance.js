//All JavaScript objects inherit properties and methods from a prototype.
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype
//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.
//Using prototoype we can add new properties and methods to object constructors.

function Car(options){//Object constructor
    this.title = options.title;
}

Car.prototype.drive = function(){//Adding method to object constructor using Javascript prototype.
    return "vroom";
}

const car = new Car({title : "BMW"});//Create new object
console.log(car.title);//Access object property
console.log(car.drive());//Access object's method