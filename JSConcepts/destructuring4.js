//Example on when to use array destructuring.
//The requirement is to map the values in points array to x and y coordinates and make another array of object.

const points = [
   [4,5],
   [10,1],
   [8,16]
]

const pairs = points.map(([x,y])=>{
  return {x:x,y:y};
});
console.log(pairs);