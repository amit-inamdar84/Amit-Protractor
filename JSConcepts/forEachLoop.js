//ECMAScript is the standard. Javascript is the implementation.
//ES6 stands for ECMAScript 6 lanunched in 2015.
//Array helper methods: forEach, map, filter, find, every, some, reduce
var colors = ['red','green','blue'];//Define JS array.
colors.forEach(function(color){//Call foreach() method on array and pass callback function as parameter.
   console.log(color);//The forEach() method calls callback function once for each array element.
});
console.log('---------------------------------');
var numbers = [10,50,90];
var sum = 0;
numbers.forEach(function(num){//We can also define this function separately and call it within this parenthesis.
   sum = sum+num;
});
console.log(sum);

console.log('---------------------------------');
function handlePosts() {
   var posts = [
     { id: 23, title: 'Daily JS News' },
     { id: 52, title: 'Code Refactor City' },
     { id: 105, title: 'The Brightest Ruby' }
   ];
   
   posts.forEach(function(post){
      savePost(posts[i]);
   }); 
}
console.log('---------------------------------');

var images = [
   { height: 10, width: 30 },
   { height: 20, width: 90 },
   { height: 54, width: 32 }
 ];
 var areas = [];


   images.forEach(function(image){
      //console.log("See here: "+(image.height*image.width)) ;
      areas.push(image.height*image.width);
   });

 areas.forEach(function(area){
   console.log(area);
 });
 
 console.log("---------------------------------");
