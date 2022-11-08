const grandFather = document.getElementById("grandFather");
const father = document.getElementById("father");
const child = document.getElementById("child");

function callback(e, name) {
    e.stopPropagation(); // to stop event propagation
    console.log(name);
}

grandFather.addEventListener("click", (e) => callback(e, "grandfather"), true);
father.addEventListener("click", (e) => callback(e, "father"), true);
child.addEventListener("click", (e) => callback(e, "child"), true);


// Bubbling :- Event propagate from child to parent in DOM
// Capturing / trickling :- From Parant to child
// if third arguement is not provided or false --> Event Bubbling
// If Third Arg is true --> Event capturing
// Cycle --> Capturing -----> Bubbling