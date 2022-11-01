
var a = 10000; // shadowing
let b = 121; 
const c = 222;
let illegal_shadowing = 1;

// block
{ 
    // compound statement
    // var illegal_shadowing = 1; // not allowed in case of let
    var a = 10;  // it "shadows" outer "a" and modifies it as both are pointing to same location
    let b = 200; // not shadows as both "b" variabvle are different in memory because "let" works this way
    const c = 211; // not shadows as both "c" variabvle are different in memory because "const" works this way
    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a); // got shadowed because of var declaration
console.log(b); // not shadowed because let declaration
console.log(c); // not shadowed

