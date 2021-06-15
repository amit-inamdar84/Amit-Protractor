//The spread operator allows us to spread the value of an array across zero or more arguments in a function or elements in an array.
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