// There are two special kinds of parameter syntax: default parameters and rest parameters.

//------------DEFAULT PARAMTER--------------
function multiply(a, b = 1) {
    return a * b; // a= 5 ,  b= 1
}

multiply(5); // --> 5


//---------------REST PARAMTER SYNTAX--------------
/* 
The rest parameter syntax allows us to represent an indefinite number
 of arguments as an array.
*/

function restExample(firstArg, ...restArgs) {
    console.log(firstArg); // 1
    console.log(restArgs);// [2->8]
}

restExample(1, 2, 3, 4, 5, 6, 7, 8);