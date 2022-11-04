const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(fetchPromise);

// first way to chain promise
fetchPromise.then((response) => {
    console.log(response);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const jsonPromise = response.json(); // convert the response JSON string to js object
    console.log(jsonPromise);
    jsonPromise.then((data) => {
        console.log(data);
    })
});

// other most commonly used way
const fetchPromise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

const jsonPromise = fetchPromise1.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json()
});

jsonPromise.then((data) => {
    console.log(data);
})

// most simplified
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json()
    })
    .then((data) => console.log(data));

