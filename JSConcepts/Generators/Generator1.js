//In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops:
function normalFunc(){
  return 22;
  console.log(2); // This line of code does not get executed
}

//In the case of generator functions, when called, they do not execute the code, instead they return a generator object . This generator object handles the execution.
function* genFunc(){
  yield 3;
  yield 4;
}
console.log(genFunc()); // Returns Object [Generator] {}
//The generator object consists of a method called next() , this method when called, executes the code until the nearest yield statement, and returns the yield value.
//For example if we run the next() method on the above code:
console.log(genFunc().next()); // Returns {value: 3, done:false}
//As one can see the next method returns an object consisting of value and done properties.
//Value property represents the yielded value.
//Done property tells us whether the function code is finished or not. (Returns true if finished)
//Generator functions are used to return iterators. Let’s see an example where an iterator is returned:
function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}