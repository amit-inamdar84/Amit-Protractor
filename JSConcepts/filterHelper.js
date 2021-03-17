//This helper can be used to iterate over an array, filter elements that match a condition and store in another array.
var products = [
  {name:'cucumber',type:'vegetable'},
  {name:'orange',type:'fruit'},
  {name:'cabbage',type:'vegetable'},
  {name:'banana',type:'fruit'}
];

var filteredProducts=products.filter(function(product){
   return product.type == 'vegetable';
});
console.log(filteredProducts);
console.log("------------------------------------------");

var electronics = [
  {name:'Samsung',type:'Mobile',quantity:0,price:50},
  {name:'Phillips',type:'Mobile',quantity:10,price:30},
  {name:'X100',type:'Headphone',quantity:8,price:5},
  {name:'Apple',type:'Laptop',quantity:1,price:100}
];

var filteredElectronics = electronics.filter(function(electronic){
    return electronic.type == 'Mobile' && electronic.quantity>8 && electronic.price<50;
});

filteredElectronics.forEach(function(electronic){//Just printing the name of filtered record instead of entire array.
 console.log(electronic.name);
});
console.log("------------------------------------------");
//Below program returns comments which belong to post with specific ID

var post = {ID:3,title:'Please vote!!!'};
var comments = [
    {postID:4,content:'Awesome post'},
    {postID:3,content:'Not good'},
    {postID:4,content:'Same post again'}
];

function commentsForPost(post,comments){
    return comments.filter(function(comment){
       return comment.postID == post.ID;
    });
}

console.log(commentsForPost(post,comments));