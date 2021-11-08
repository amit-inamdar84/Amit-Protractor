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
console.log("------------------------------------------");

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
   return image.height;
});
console.log(heights);
console.log("------------------------------------------");

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
   return trip.distance/trip.time;
});
console.log(speeds);
console.log("------------------------------------------");

var result = [];
function pluck(array,property){
  array.map(function(arr) {
    return result.push(arr[property]);//Another way to access array element with key.
  });
  return result;
}


var paints = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'yellow'}
];

console.log(pluck(paints,'color'));

console.log("------------------------------------------");

function pluck(array, property) {
  var newarr = array.map(function(arr){
      return arr[property];
  });
  
  return newarr;
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

pluck(paints, 'color');