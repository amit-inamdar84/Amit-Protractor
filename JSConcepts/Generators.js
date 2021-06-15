//For of loop is another loop in JS to iterate on an array. This loop is used with generators.

const numbers = [1,9,20,8,7];
let total = 0;

for (const number of numbers) {
    total = total + number;
}

console.log(total);