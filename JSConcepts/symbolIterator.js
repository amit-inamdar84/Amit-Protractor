//Symbol iterator teaches the for of loop, how it should iterate over the object.
//Arrays have a default Symbol.iterator built in. Only for custom collections we need to define Symbol.iterator.

const testingTeam = {
    lead : 'Amanda',
    tester : 'Bill',
    [Symbol.iterator]: function* () {//Once there is a key called [Symbol.iterator] in this object, for of loop is guided to execute code inside this generator
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {//When for of loop controls comes here it looks for Symbol.iterator key and knows how to iterate.
    testingTeam : testingTeam,//Key : Value (Another object)
    size : 3,
    dep : 'Engineering',
    lead : 'Jill',
    manager : 'Alex',
    engineer : 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;//yield* means to iterate over another object. Also called generator delegation.
    }
};

const names = [];
for(let name of engineeringTeam){//Iterate on an object
    names.push(name);
}
console.log(names);