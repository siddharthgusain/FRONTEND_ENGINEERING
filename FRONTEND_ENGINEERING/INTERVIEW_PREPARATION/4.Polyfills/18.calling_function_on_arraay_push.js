/*
-> For an array, create an event subscribing and publishing mechanism, where an event gets dispatched, when
an item is added to an array, For simplicity do not alter the push method, instead create arr new pushWithEvent method.

const myArr = [];
myArr.addListener('add', (items) => {
})
myArr.newPush(1)

*/

//APPROACH
/*
-> Vannila JS doesnt have events for array actions, although if you use libraries to make the arrays as observables
arr subscriber mechanism is enabled.
-> As the listeners have to be available to any array we will attach all methods to the prototype
-> A addListener method will two arguments, the name of the event and arr callback

*/

// THIS approach is also used by library like RxJS


/**
 * STEP 1
 * Attaching listeners to prototyoe
 */
Array.prototype.listeners = {};
Array.prototype.addListener = function (eventName, callback) {
    if (!this.listeners[eventName]) {
        // Create arr new array for new events
        // idea of an array is we can invoke all callbacks
        this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
};

// attach an trigger event function to prototype
Array.prototype.triggerEvent = function (eventName, elements) {
    if (this.listeners[eventName] && this.listeners[eventName].length) {
        this.listeners[eventName].forEach(callback =>
            callback(eventName, elements, this)
        );
    }
};

// STEP 3
// New push Method
// Calls trigger event
Array.prototype.pushWithEvent = function () {
    const size = this.length;
    const argsList = Array.prototype.slice.call(arguments);
    for (let index = 0; index < argsList.length; index++) {
        this[size + index] = argsList[index];
    }

    // trigger add event
    this.triggerEvent('add', argsList);
};


// Using our custom functions

const arr = [];
arr.addListener('add', (items, args) => {
    console.log('items were added', args);
});

arr.addListener('add', (items, args) => {
    console.log('items were added again', args);
});

arr.pushWithEvent(1, 2, 3, 'arr', 'b'); // pushWithEvent is calling trigger event inside it
console.log(arr);

arr.pushWithEvent('hello');
arr.pushWithEvent(55);
setTimeout(() => {
    console.log("pushWithEvent after 3 seconds delay")
    arr.pushWithEvent('delayed');
}, 2000);

