//Array helpers like map, for each loop do not work with generators.
class Comment {
    constructor(content, children){
        this.content = content;
        this.children = children;
    }   
    *[Symbol.iterator] () {//Syntax to declare symbol.iterator in class.
        yield this.content;
        for(let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('ment', [])
]

const tree = new Comment('Great post', children);
const values = [];
for(let value of tree){
    values.push(value);
}
console.log(values);

