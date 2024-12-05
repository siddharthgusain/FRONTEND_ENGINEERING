{
    let a = 10; // have block scope
    const b = 20; //have block scope
    var c = 30; // attached inside window object
}

window.console.log(window.a); // 10
window.console.log(window.b); // undefined
window.console.log(window.c); // undefined