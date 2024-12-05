// Implement Async.parallel, which executes a set of async tasks parallelly
/*
You have an asyncFunction which takes a callback and the result of the asyncFunction 
is passed to the callback, create a function asyncParallel which takes an array of 
asyncFunctions and a resultCallback. When the asyncActions are completed the 
resultCallback must be invoked with the values.
*/

// just a function to create a async task
function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return function (callback) {
        setTimeout(() => {
            callback(value);
        }, value * 1000);
    };
}


const taskList = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask()
];

function asyncParallel(taskList, resultsCallback) {
    const results = [];
    let tasksCompleted = 0;
    taskList.forEach((task) => {
        task(value => {
            results.push(value);
            tasksCompleted = tasksCompleted + 1;
            if (tasksCompleted >= taskList.length)
                resultsCallback(results)
        });
    })
}

// concept being used:- Closure, Higher order function , first class citizens
asyncParallel(taskList, result => {
    console.log('got the results', result);
});

