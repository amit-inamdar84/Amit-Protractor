//The rest operator allows us to pass an indefinite number of parameters to a function and access them in an array.
//Note- Rest parameter should always be used at the last parameter of a function

function addNumbers(...numbers){//...is a rest operator
    return numbers.reduce((sum,number)=>{
      return sum+number;
    },0);
}

console.log(addNumbers(1,2,3,4,5));
console.log("-----------------------------------------");


function extractingArgs(...args){
  return args[1];
}

console.log(extractingArgs(8,9,1)); // Returns 9
console.log("-----------------------------------------");

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

console.log(addAllArgs(6, 5, 7, 99)); // Returns 117
console.log(addAllArgs(1, 3, 4)); // Returns 8

