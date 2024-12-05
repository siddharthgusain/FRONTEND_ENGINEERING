function callback() {
    console.log("callback");
}

function HOC(callback) {
    callback();
}

HOC(callback);

/*
Javscript is mostly used as functional but when developing library and frameworks
classes based design patterns are used.
*/

// ALways remember try to write generic function as possible .

// Map , filter , reduce all are higher order function