//Example for destructuring arrays.
//Here we extract individual elements of array.

const companies = [
    'Google',
    'Cognizant',
    'Ola'
]

//For objects we specify {} and for array variables we specify []
//The order of extraction will be the same as in array.
const [name1,name2,name3] = companies;//Equivalent to const name = companies[0];
console.log(name1);
console.log(name2);
console.log(name3);

const {length} = companies;//Get length of array.
console.log(length);
