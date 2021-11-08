//The spread operator allows us to spread the value of an array across zero or more arguments in a function or elements in an array.
//One use of spread operator is to merge 2 arrays or objects.
var palletteColors = ['Red','Orange','Purple'];
var userColors = ['Blue','Voilet','Peach'];

//Standard way to concatenate arrays.
console.log(palletteColors.concat(userColors));

//Using spread operator
console.log([...palletteColors,...userColors]);

//We can also add single values to array being concatenated.
console.log(['Pink',...palletteColors,...userColors]);

//Mixing rest and spread operator
function validateShoppingList(...items){//Rest operator combining separate values into array
   if(items.indexOf('Milk') < 0){
       return ['Milk',...items];//Spread operator spreading items in an array.
   }
   return items;
}

console.log(validateShoppingList('Bread','Butter'));
console.log(validateShoppingList('Bread','Butter','Milk'));
console.log("-----------------------------------------");

function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8
console.log("-----------------------------------------");

let obj1 = {x:'Hello', y:'Bye'};
let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1,...obj2}; // Spreads and clones obj1
console.log(mergedObj);

//Note- Key differences between rest parameter and spread operator
//Rest parameter is used to take a variable number of arguments and turns into an array while the spread operator takes an array or an object and spreads it
//Rest parameter is used in function declaration whereas the spread operator is used in function calls.