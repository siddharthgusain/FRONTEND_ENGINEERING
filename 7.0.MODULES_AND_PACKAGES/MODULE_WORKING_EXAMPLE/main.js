import { exportedFunction } from "./Module.js";

// function exportedFunction() {
//     console.log("I am not from module");
// }

let i = exportedFunction();
console.log(i);
console.log(j); // "j" is not exported from Module.js so not accessible here because of Module scope.

//NOTE:- We can't redeclare same function that was in module