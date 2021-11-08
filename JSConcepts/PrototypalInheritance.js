//All JavaScript objects inherit properties and methods from a prototype.
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype
//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.
//Using prototoype we can add new properties and methods to object constructors.
//A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

function Car(options){//Object constructor
    this.title = options.title;
}

Car.prototype.drive = function(){//Adding method to object constructor using Javascript prototype.
    return "vroom";
}

const car = new Car({title : "BMW"});//Create new object
console.log(car.title);//Access object property
console.log(car.drive());//Access object's method


var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]
//In the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.
//The reason being the use of prototypes. As we discussed before, Array objects inherit properties from the Array prototype.
//The javascript engine sees that the method push does not exist on the current array object and therefore, looks for the method push inside the Array prototype and it finds the method.
//Whenever the property or method is not found on the current object, the javascript engine will always try to look in its prototype and if it still does not exist, it looks inside the prototype's prototype and so on.