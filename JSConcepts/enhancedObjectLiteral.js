//Below are the rules to use enhance object literals.
//In a function that has key and value, if key and value names are same, we can remove : and value.
//If the value of a key is a function, we remove colon and function keyword.
//The intent is to make code look more compact and cleaner.

//Example below:
//This is a function that takes array as argument and returns objects.
//The argument here is inventory which is an array containing objects(represnting books) that have title and price.
//Returning objects here are total price of all books and price of book for a particular title.
function createBookShop(inventory){
  return {
     inventory,//Value and colon removed here
     //Colon and function keyword is removed in below line
     inventoryValue(){//This function will use reduce helper to total price of all books
          return this.inventory.reduce((total,book) => total+book.price,0);
     },

     //Colon and function keyword is removed in below line
  priceForTitle(title){//This function will take a title and return its price.
    return this.inventory.find(book => book.title === title).price;//Find helper runs on inventory and returns a book object which matches title passed in argument. On this book we fo book.price to get book's price.
}
  };
}

//Array that contains inventory of books in the form of objects. Each object is a book.
const inventory = [
  {title:'Harry Potter',price:15},
  {title:'Carribean',price:10}
];

const bookShop = createBookShop(inventory);//Invoking function and passing inventory array as argument.
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Carribean'));