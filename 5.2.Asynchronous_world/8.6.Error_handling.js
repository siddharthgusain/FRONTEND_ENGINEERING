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
// catch will be called if any of the promise in the chain fails