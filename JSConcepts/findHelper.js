//This helper will find a specific element in an array.
//It will traverse through the array till it finds the first matching element.
//It returns true after 1st matching element is found.
var users = [
    {name:'Jill'},
    {name:'Bill'},
    {name:'Kill'},
    {name:'Kill'}//Will not return this as this is a 2nd occurence.
];

var result = users.find(function(user){
   return user.name == 'Kill';
});

console.log(result);
console.log("---------------------------------");

var posts = [
    {id:4, title:'New post'},
    {id:5, title:'Great post'}
];

var comments = {id:5, content: 'Old post'};

function postForComments(posts, comments){
    return posts.find(function(post){
       return post.id == comments.id;
    });
}
var result1 = postForComments(posts, comments);
console.log(result1);