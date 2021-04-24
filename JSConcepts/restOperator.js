//The rest operator allows us to pass an indefinite number of parameters to a function and access them in an array. 

function addNumbers(...numbers){//...is a rest operator
    return numbers.reduce((sum,number)=>{
      return sum+number;
    },0);
}

console.log(addNumbers(1,2,3,4,5));