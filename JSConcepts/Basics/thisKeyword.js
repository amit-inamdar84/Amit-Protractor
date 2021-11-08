//The JavaScript this keyword refers to the object it belongs to.
/* It has different values depending on where it is used:
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object. */

function doSomething() {
    console.log(this);//Here this refers to global object as doSomething() is a property of global object.
  }
          
  doSomething();

  var obj = {
    name:  "vivek",
    getName: function(){//getName function is a property of the object obj
    console.log(this.name);//Here this keyword refers to the object obj
  }
}
obj.getName();

//Although the getName function is declared inside the object obj , at the time of invocation, getName() is a property of obj2 , 
//therefore the “this” keyword will refer to obj2 .
//The silly way to understanding the this keyword is, whenever the function is invoked, check the object before the dot . 
//The value of this keyword will always be the object before the dot .
//If there is no object before the dot like in example1, the value of this keyword will be the global object.
var obj1 = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}

var getName = obj1.getName;
        
var obj2 = {name:"akshay", getName };
obj2.getName();