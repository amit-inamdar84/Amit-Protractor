//The reduce() method reduces the array to a single value.
//reduce is applied to an array with 2 arguments - initial variable and array value one by one.
//For every iteration the inital value's latest value is passed to iterator function along with next element in array.
//The initial variable is initialized at the end of iterator function declaration. i.e after flower bracket.

var numbers = [10,20,30];
var sum;

var result = numbers.reduce(function(sum,number){
   return sum+number;
},100);

console.log(result);
console.log("-----------------------------------");

var primaryColors = [
    {color: "Red"},
    {color: "Green"},
    {color: "Blue"}
];

var result1 = primaryColors.reduce(function(previous, primaryColor){//previous is just any variable (accumulator)
    //previous.push(primaryColor);//This will push object into array one at a time.
    previous.push(primaryColor.color);//This will push only the property's value.
    return previous;
}, []);

console.log(result1);
console.log("--------------------------------------");

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(acc,desk) {
          if(desk.type == "sitting"){++acc.sitting;}
          if(desk.type == "standing"){++acc.standing;}
           return acc;
  }, { sitting: 0, standing: 0 });

  console.log(deskTypes);