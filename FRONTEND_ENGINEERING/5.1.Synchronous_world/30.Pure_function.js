/*

-> We refer to functions that don’t affect anything in the outside scope as pure functions.

->As long as a function only takes primitive values as parameters and doesn’t use any 
variables in its surrounding scope, it is automatically pure, as it can’t affect anything 
in the outside scope. 

->All variables created inside are garbage-collected as soon as the function returns.
*/

var outer = 10;

function pureFunction() {
    let i = 10;
    console.log(i);
}

function ImpureFunction() {
    outer = 200;
}

/*
-> A function that takes in an Object, however, can mutate the state of its surrounding
scope.

-> If a function takes in an array reference and alters the array that it points to,
perhaps by pushing to it, variables in the surrounding scope that reference that array
see that change.

-> After the function returns, the changes it makes persist in the outer scope.
This can cause undesired side effects that can be difficult to track down.
*/

//-------------Some examples of pure function-----------------
/*
-> Many native array functions, including Array.map and Array.filter, are therefore written
as pure functions. 

-> They take in an array reference and internally, they copy the array and work with the 
copy instead of the original. 

-> This makes it so the original is untouched, the outer scope is unaffected, and we’re 
returned a reference to a brand new array.
*/

//------------IMPURE FUNCTION-----------
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}
var alex = {
    name: 'Alex',
    age: 30
};
var changedAlex = changeAgeImpure(alex);

console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }
