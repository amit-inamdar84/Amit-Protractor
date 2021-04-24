//This is an ES6 feature where we can assign default values to function arguments.
//This is useful when we forget to specify the parameters when calling a function.
//Instead of specifying an if condition on what to do if arguments are not sent we can use default argument.
//We can also assign return value of a function call as value of default argument.

function makeRequest(url,method='GET'){
    /* if(!method){//If method is not defined we need extra lines of code for condition
        method = 'GET';//Instead we can define default value for argument in parameter list
    } */


    return method;
}

console.log(makeRequest("google.com"));
console.log(makeRequest("google.com",'POST'));
console.log(makeRequest("google.com",null));//In some function calls if we need to pass no values we can use null. It will not use default value here.
console.log(makeRequest("google.com",undefined));//But if we pass undefined it will take default argument.

console.log("----------------------------------------------");

function User(id){
    this.id = id;
}

function generateID(){
    return Math.random() * 999;
}

function createAdmin(user = new User(generateID())){
    user.admin = true;
    return user;
}

//Instead of combining create admin and new user function like below we can use function's return value directly in argument.
//console.log(createAdmin(new User(generateID())));
console.log(createAdmin());
//However in case we want to pass user we can use like below:
const user = new User(generateID());
console.log(createAdmin(user));