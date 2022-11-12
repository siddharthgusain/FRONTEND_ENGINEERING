// Map and set

const myMap = new Map();
myMap.set("firstName", "siddharth");
myMap.set("lastName", "Gusain")
myMap.set("age", 24);
console.log(myMap);
console.log(myMap.size)

// ------------Iterating through map-----------
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Weak Map
/*
A WeakMap is a collection of key/value pairs whose keys must be objects, with values of 
any arbitrary JavaScript type, and which does not create strong references to its keys.
*/

const myWeakMap = new WeakMap();


//-----------SETS----------------
const mySet = new Set(); // Uniques values
mySet.add(1);
mySet.add(1);
console.log(mySet); // only one entry as other one is duplicate


// how to remove duplicates in an Array
// Easy way is to convert it to map
let arr = [1, 1, 1, 1, 2, 3, 4, 5];
