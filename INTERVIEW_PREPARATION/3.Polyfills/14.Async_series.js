/*
Implement Async.series, which executes a set of
async tasks in series

QUES:- 
You have an asyncFunction which takes a callback and the result of the 
asyncFunction is passed to the callback, create a function asyncSeries which 
takes an array of asyncFunctions and a resultCallback. asyncSeries should 
sequentially execute the asyncActions, on completion of the last task, 
the resultCallback should be invoked with the results in an array.
*/


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
]

function asyncSeries(taskList, callback) {
    var result = [];
    let tasksCompleted = 0;
    taskList.reduce(
        (accum, current) => {
            return accum.then(someVal => {
                return new Promise((resolve, reject) => {
                    current((value) => {
                        result.push(value)
                        tasksCompleted++
                        if (tasksCompleted === taskList.length) {
                            callback.call(null, result)
                        } else {
                            resolve(value)
                        }
                    })
                })
            })
        }, Promise.resolve()
    )
}


asyncSeries(taskList, (result) => {
    console.log("got the results", result)
})

