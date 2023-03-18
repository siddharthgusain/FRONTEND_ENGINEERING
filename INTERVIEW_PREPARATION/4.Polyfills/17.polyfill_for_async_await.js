/*
-> Async/await is a way to write code more readable and avoid writing promise chain in JS
-> Async/Await is just syntactical sugar made using Generator function
-> Async await can be created using Generators
*/

async function asyncAwait() {
    const resolvedPromise = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await resolvedPromise.json();
    console.log(data);
}

asyncAwait();


// custom async await

function customAsync(customGenerator) {
    let gen = customGenerator(); // gets a generator
    // let promise = gen.next().value -> value is actually a promise returned from fetch call which needs to be resolved;
    function resolver(value) {
        const n = gen.next(value);
        console.log(n);
        if (n.done) return;
        n.value.then(resolver);
    };

    resolver();
}

function* customGenerator() {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = yield response.json();
    console.log(data);
}

customAsync(customGenerator);

