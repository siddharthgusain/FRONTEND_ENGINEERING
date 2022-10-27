a();
console.log(b);

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
