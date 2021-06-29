//For of loop is another loop in JS to iterate on an array, object. This loop is used with generators.
//Generators are functions that can be entered and exited multiple times.
//Generators can be used iterate over any type of collections in Javascript.

const numbers = [1,9,20,8,7];
let total = 0;

for (const number of numbers) {
    total = total + number;
}

console.log(total);

//Below is example of generator
function* colors(){
    yield 'Red';
    yield 'Green';
    yield 'Blue';
}

const myColors = [];
for(let color of colors()){
    myColors.push(color);
}
console.log(myColors);

//Another example to iterate over collection
const engineeringTeam = {
    size : 3,
    dep : 'Engineering',
    lead : 'Jill',
    manager : 'Alex',
    engineer : 'Dave'
};

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){//Here instead of engineering team we can pass other team and reuse generator
    names.push(name);//In every loop there is entry and exit into the generator
}
console.log(names);

