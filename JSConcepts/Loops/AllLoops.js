//for loop
//for (..in) loop
//for (..of) loop
//while loop
//do-while loop

//for loop. Instead of return type we specify var.
for(var i=1; i<=100; i++){
	console.log(i);
}

for(var i=0; i<=100; i=i+5){
	console.log(i);
}

//while loop can be used to wait till an image/loader to disappears. In condition we can specify till image is displayed (true) 
//and in body we can write code to wait. Once condition is false we come out of loop and stop waiting.
var i=1;
while(i<5){
	console.log(i);
	i++;
}

//do while loop will execute at least once no matter if condition is false. In automation if we need to click on a button and then check if
//page is loaded or not and the click again on same button if it is not loaded, we use this loop.
var j = 10;
do{
	console.log(j);
	j++;
}while(j<6)

//The for..in loop provides a simpler way to iterate through the properties of an object.
//In each iteration, one of the properties of Object is assigned to the variable named variableName and this loop continues until all of the properties of the Object are processed

	var languages = { first : "C",
                      second : "Java",
					  third : "Python", 
                      fourth : "PHP",
					  fifth : "JavaScript" };

	for (itr in languages)
	{
		console.log(languages[itr]);
	}


        var person = {
            firstName: "Demo",
            lastName: " of for of loop ",
            rank: 43
        };
        var userId = "";
        var i;
        for (i in person) {
            userId += person[i];
        }
        console.log(userId);

//for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.
        var text = [
            "Demo",
            " of for of ", 
            "loop"
            ];
        var userId = "";
        var i;
        for (i of text) {
        userId+=i;
        }
        console.log(userId);