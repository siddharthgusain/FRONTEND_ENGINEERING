fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });
// catch will be called if "ANY" of the promise in the chain fails

fetch('https://jsonplaceholder.typicode.com/todo')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json()
    }).catch((err) => {
        console.log(err); // will catch error occured "BEFORE THIS" catch block "ANYWHERE ABOVE"
    })
    .then((data) => console.log(data)) // this will still be run and will give "UNDEFINED"
