/*
-> For an array, create an event subscribing and publishing mechanism, where an event gets dispatched, when
an item is added to an array, For simplicity do not alter the push method, instead create a new pushWithEvent method.

const myArr = [];
myArr.addListener('add', (items) => {
})
myArr.newPush(1)

*/

//APPROACH
/*
-> Vannila JS doesnt have events for array actions, although if you use libraries to make the arrays as observables
a subscriber mechanism is enabled.
-> As the listeners have to be available to any array we will attach all methods to the prototype
-> A addListener method will two arguments, the name of the event and a callback

*/

// THIS approach is also used by library like RxJS


