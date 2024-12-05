a(); // a  is present in memory and pointing to memory location of a() function during memory creation phase
arrow_function(); // Here arrow function behaves just like another variable so , error will popup "arrow_function is not a function"
console.log(b); // b is present in memory with undefined

var b = 7;

function a() {
    var insideGetName;
    console.log(insideGetName);
    console.log("hello");
    console.log(this);
    console.log(window);
}

var arrow_function = () => {
    console.log("arrow_function");
}

a();

console.log(b);
arrow_function();
