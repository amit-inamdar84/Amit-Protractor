//Example for destructuring objects and array at the same time.

const companies = [
    {name:'Google',location:'Mountain view'},
    {name:'Cognizant',location:'Tea Neck'},
    {name:'Facebook',location:'New York'}
]

const [x] = companies;
console.log(x);

const {y} = companies;
console.log(y);

const [{location}] = companies;//Extracting array and then the object property within it.
console.log(location);

console.log('--------------------------------------------------------');
const Google = {
    locations: ['Mountain view','Tea Neck','York']
}

const {locations : [loc]} = Google;
console.log(loc);
