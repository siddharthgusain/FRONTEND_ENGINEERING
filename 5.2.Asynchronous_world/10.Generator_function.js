/*
When Generator function is called, generator functions do not initially execute their code. 
Instead, they return a special type of iterator, called a Generator. When a value is consumed
by calling the generator's next method, the Generator function executes until it encounters
the "YIELD" keyword.
*/

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