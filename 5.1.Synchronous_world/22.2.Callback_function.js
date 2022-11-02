// Callback functions :- Function that are passed to other functions as arguement 
function highOrderFunction(callback) {
    callback();
}

function callback() {
    console.log("hello");
}

highOrderFunction(callback);


setTimeout(callback, 3000); // setTimeout is an asynchronous function we will talk about it later 