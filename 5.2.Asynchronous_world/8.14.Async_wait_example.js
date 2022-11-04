async function fetchTodo() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchTodo();

/*
Async/Await enables us to write asynchronous code in a synchronous fashion, which produces 
cleaner and easier-to-understand logic. Under the hood, it’s just syntactic sugar using 
generators and yield statements to “pause” execution. In other words, async functions 
can “pull out” the value of a Promise even though it’s nested inside a callback function, 
giving us the ability to assign it to a variable!
*/
