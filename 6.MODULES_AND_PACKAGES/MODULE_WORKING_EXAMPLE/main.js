import { exportedFunction } from "./Module.js";

// function exportedFunction() {
//     console.log("I am not from module");
// }

exportedFunction();
console.log(i); // "i" is not exported from Module.js so not accessible here because of Module scope.

//NOTE:- We can't redeclare same function that was in module