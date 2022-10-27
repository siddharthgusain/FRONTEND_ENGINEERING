{
    let a =10; // have block scope
    const b =20; //have block scope
    var c =30; // attached inside window object
}

window.console.log(window.a);
window.console.log(window.b);
window.console.log(window.c);