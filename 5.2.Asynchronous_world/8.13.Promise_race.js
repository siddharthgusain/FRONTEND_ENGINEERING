//------------PROMISE.RACE-----------
/*
The Promise.race() method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.log("CATCH IS CALLED");
    });

/*
expected output: "CATCH IS CALLED" , even though SLOWER promise was RESOLVED but faster promise gets REJECTED and
wins the race , so catch is called
-> So , then() or catch() which one will be called depends on first promise status also its kind
of race condition
*/

// In case of any , output would be 'one' , even though it is slow but it is the first Promise to get "Fullfilled"
// Its kind of racing condition , output depends of completion of events
