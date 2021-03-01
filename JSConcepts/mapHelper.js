//It is a good practice to avoid mutation of array.
//
var arr1 = [1,2,3];
var arr2 = [];

//Method1: Using traditional for loop to store result in another array
for(var i = 0; i<arr1.length; i++){
    arr2.push(arr1[i]*2);
}
console.log(arr2);

//Method2: Using map helper to store result in another array
var arr3 = arr1.map(function(arr){//Using map helper on array and passing each value to callback function.
  return arr*2;//Every value is then multiplied and returned to store in new array. It is mandatory to return a value when using map.
});
console.log(arr3);
console.log("-----------------------------------------");

var cars = [
    {model:'Buick', price:'Cheap'},
    {model: 'Camaro', price: 'Expensive'}
];
var prices = [];
prices = cars.map(function(car){
  return car.price;
});
console.log(prices);