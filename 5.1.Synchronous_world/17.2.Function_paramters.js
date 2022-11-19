/* 
There are two special kinds of parameter syntax: 
1. default parameters 
2. rest parameters
*/

//------------DEFAULT PARAMETER--------------
function multiply(a, b = 1) {
    return a * b; // a= 5 ,  b= 1
}

multiply(5); // --> 5
// This way is useful if we beforehand know how many arguments we want and function is well defined

//---------------REST PARAMETER SYNTAX--------------
/* 
The rest parameter syntax allows us to represent an "INDEFINITE NUMBER OF ARGUEMENTS"
AS AN ARRAY
*/

function restExample(firstArg, ...restArgs) {
    console.log(firstArg); // 1
    console.log(restArgs);// [2->8]
}

restExample(1, 2, 3, 4, 5, 6, 7, 8);

/*
-> It can be very useful if we want to make a generic function which can be 
called anywhere with different kind of arguements.

-> So its a kind of "POLYMORPHISM" that we see in OOPS style of programming
*/