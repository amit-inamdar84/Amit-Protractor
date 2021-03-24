//Practical use of reduce helper
//Logic: Take a counter (initial value = 0) and increase by 1 if open parenthesis and decrease by 1 if closing parenthesis.
//At the end, if function returns 0 it is a balanced parenthesis. If it returns >0 or <0 it is unbalanced.
//Javascript function returns true for 1 and false for 0. So flip the return using !.

var test = '()()a';
console.log(balancedParens(test));

function balancedParens(test){
  return !test.split("").reduce(function(previous, char){
    if(previous<0){return previous;}
    if(char == "("){return ++previous;}
    if(char == ")"){return --previous;}
    return previous;
  }, 0);
}

