//We can use arrow functions => in following conditions:
//To eliminate function keyword.
//If there is single line of expression in function body, we can remove return keyword and curly braces.
//In case the single line expression is complex and very long, prefer old method.


/* function add(a,b){//Old way of writing functions
    return a+b;
}
console.log(add(8,10)); */

let add = (a,b)=> a+b;
console.log(add(8,10));

//If the function contains a single argument we can drop off the parenthesis as well.
const double = number => number*2;
console.log(double(20.55));

//If the function contains no argument we have to keep parenthesis.
const print = () => "No argument fat arrow function";
console.log(print());

//Arrow functions are useful for making this keyword refer to current object.
//In below snipper, this.teamName returns undefined because map function only refers to members.
const team = {
   members : ['Jane','Bill'],
   teamName : 'Super Squad',
   teamSummary : function(){
       return this.members.map(function(member){
           return `${member} is on team ${this.teamName}`;
       });
   }
};
console.log(team.teamSummary());

//So here we can use arrow function to solve the problem.
//Arrow functions bind the value of 'this' to surrounding context.
const team1 = {
    members : ['Jane','Bill'],
    teamName : 'Super Squad',
    teamSummary : function(){
        return this.members.map((member)=>{
            return `${member} is on team ${this.teamName}`;
        });
    }
 };
 console.log(team1.teamSummary());


 const profile = {
    name: 'Alex',
    getName : function(){
        return this.name;
    }
};
console.log(profile.getName());