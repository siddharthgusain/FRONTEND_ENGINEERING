const promise = new Promise(function (resolve, reject) {
    console.log("Promise callback");
    resolve();
});

promise.then(function (result) {
    console.log("Promise callback (.then)");
});

setTimeout(function () {
    console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);


/*
output:-
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
*/