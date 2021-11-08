//Primitive and non-primitive
//Primitive can store only a single value- Strings, Number, BigInt, Null, Undefined, Boolean.
//Difference between undefined and not defined in JavaScript - If the variable name which is being accessed doesn’t exist in
//memory space then it would be not defined, and if exists in memory space but hasn’t been assigned any value till now, 
//then it would be undefined.

var str = "Friend";
console.log(typeof "Friend");//Returns string

var num1 = 3;
var num2 = 3.6;
console.log(typeof num2);

var bigInteger = 39840099404333922839444983;
console.log(typeof bigInteger);

var a = true;
console.log(typeof a);

var x;
var y = undefined;
console.log(typeof x);
console.log(typeof y);

var z = null;
console.log(typeof z);

//New data type introduced in ES6. Used to store anonymous and unique values.
var symbol1 = Symbol('test');
console.log(symbol1);
console.log(typeof symbol1);

//Non-primitive - Can store multiple and complex values..
//Any data type that is not primitive is of object type in Javascript.
var obj = {
    x : 4,
    y : 5,
    z : function(){
        return this.x;
    }
}

var array = [20, true, "Hello", 3.9];
console.log(typeof array);