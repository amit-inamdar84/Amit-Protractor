//Using delegation, we can iterate over multiple collections.

const testingTeam = {
    lead : 'Amanda',
    tester : 'Bill'
}

const engineeringTeam = {
    testingTeam : testingTeam,//Key : Value (Another object)
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
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);//Calling another generator with argument obj.key which is another object itself.
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){//Another generator to iterate testingTeam object
    yield team.lead;
    yield team.tester;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){//Using a single for loop and iterate multiple generators.
    names.push(name);//In every loop there is entry and exit into the generator
}
console.log(names);