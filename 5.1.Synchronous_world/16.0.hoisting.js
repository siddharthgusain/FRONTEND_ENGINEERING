a(); // a is present in memory during memory creation phase
console.log(b); // b is present in memory with undefined

var b = 7;
function a(){
    var insideGetName ;
    console.log(insideGetName);
    console.log("hello");
    console.log(this);
    console.log(window);
}

a();

console.log(b);
console.log(a);
