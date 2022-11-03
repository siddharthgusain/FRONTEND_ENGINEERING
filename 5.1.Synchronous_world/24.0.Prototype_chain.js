// Prototypes are the mechanism by which JavaScript objects inherit features from one another
// it is different from other languages inheritance

//*** Note *** : prototype property of a class like Number is another object
// where we define those property which can be inherited
// only those properties of "Number" is inherited which are defined inside "Number.prototype" object

// eg:- class Person{
// [this function display can be inherited]
//     Person.prototype.display() = function () {
//         console.log("hello");
//     }
// }

// Number , Array , Object all are inbuilt classes

var num = 10; // it is a number 
// num => Number.prototype => Object.prototype => null
// num.__proto__ == Number.prototype
// "[[prototype]]"" in console is equivalent to "__proto__" property
//( only those properties present inside Number.prototype are inherited 
// and can be used by any number)

var arr = []; // it is a arr
// arr => Array.prototype => Object.prototype => null

var str = "sid"; // it is a string
// str => String.prototype => Object.prototype => null

var obj = {}; // it is a object
// obj => Object.prototype => null

var fun = function () { }; // it is a function
// fun => Function.prototype => Object.prototype => null

// first a property is looked into the outside object then its prototype and so on along ths chain


