/*
A deep copy of an object is a copy whose properties do not share the same references
(point to the same underlying values) as those of the source object from which the copy
was made. As a result, when you change either the source or the copy, you can be assured
you're not causing the other object to change too; that is, you won't unintentionally be
causing changes to the source or copy that you don't expect
*/


//Primitive types are always deep copied

// Lets talk about Objects
// There is only one way to create deep copy with JSON methods
// ---------------Object-----------
let obj1 = {
    "firstName": "sid"
}

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2["lastName"] = "gusain";

console.log(obj1); // {"firstName":"sid"}
console.log(obj2); // {"firstName":"sid","lastName:"gusain"}


let arr1 = [1, 2, 3, 4, 5];

let arr2 = JSON.parse(JSON.stringify(arr1));

arr2[0] = "modified";
console.log(arr1); //[1, 2, 3, 4, 5]
console.log(arr2); //['modified', 2, 3, 4, 5]





