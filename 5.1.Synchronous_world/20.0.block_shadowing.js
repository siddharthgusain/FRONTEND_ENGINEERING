
var a = 10000; // shadowing
let b = 121; 
const c = 222;
let illegal_shadowing = 1;

// block
{ 
    // compound statement
    // var illegal_shadowing = 1; // not allowed
    var a = 10;
    let b = 200;
    const c = 211;
    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a);
console.log(b); 
console.log(c);

