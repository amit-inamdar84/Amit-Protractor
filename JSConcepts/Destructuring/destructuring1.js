//Example to show destructuring arguments object.

var savedFile = {
    name : 'transfer',
    extension : '.jpg',
    size : '1500MB'
}

function fileSummary(file){//Argument is an object.
    return `The file ${file.name}${file.extension} is of size ${file.size}`;//Here the object name repeats 3 times.
}

function fileSummary1({size,name,extension,}){//Instead of object we can directly use properties. The order of arguments can differ
    return `The file ${name}${extension} is of size ${size}`;//Here the object name can be replaced with properties.
}

console.log(fileSummary(savedFile));//Passing object as argument to function call.
console.log(fileSummary1(savedFile));//Calling function with object properties as parameters instead of object.