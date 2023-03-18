/*
When Generator function is called, generator functions do not initially execute their code. 
Instead, they return a special type of iterator, called a Generator. When a value is consumed
by calling the generator's next method, the Generator function executes until it encounters
the "YIELD" keyword.
*/

// Generators are syntactical sugars to make iterators

function* generator() {
    yield 1;
    yield 2;
}

const it = generator();
console.log(it);

console.log(it.next().value); // 1
console.log(it.next().value); // 2


function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

let gen = makeRangeIterator(0, 10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

// By default Object are not iterable
// Creating an user defined iterable object
const myIterable = {
    [Symbol.iterator]: function* () { // key is [Symbol.iterator] and value is Genrator function
        yield 1;
        yield 2;
        yield 3;
    },
};

// Using for..of loop for custom iterable object
for (const value of myIterable) {
    console.log(value);
}

console.log([...myIterable]);

/*

# Built-in iterables
-> String, Array, TypedArray, Map and Set are all built-in iterables, because their "prototype 
objects" all have a "Symbol.iterator" method.
-> Objects are not iterable by default
*/
