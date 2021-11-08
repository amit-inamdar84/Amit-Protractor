//In the function below, we are returning a promise inside a function:
function sumOfThreeElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}
sumOfThreeElements(1,2,3,4).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
//In the code above, we are calculating the sum of three elements, if the length of elements array is more than 3, promise is rejected, else the promise is resolved and the sum is returned.
// In the code above, if the promise is fulfilled, then() method gets executed.
//Else catch() method gets executed
