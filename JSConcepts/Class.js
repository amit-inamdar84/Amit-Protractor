class Car{
  constructor({title}){//This constructor method will be automatically called when object is created.
    this.title = title;//Initializes the object's property value.
  }

  drive(){//Function inside a class
      return 'vroom';
  }
}

//const car = new Car({title:'Toyota'});//Object creation and assigning to a variable.
//console.log(car);//In java if we print object it returns address. Here it returns the object property and value.
//console.log(car.drive());//Invoking function that is defined inside a class. Same like Java

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