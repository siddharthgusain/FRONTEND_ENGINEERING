/*
In JavaScript an iterator is an object which defines a sequence and potentially a return 
value upon its termination.

*/


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) { // if iteration not completed yet
                result = {
                    value: nextIndex,
                    done: false
                };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { // if iteration is completed
                value: iterationCount,
                done: true
            };
        }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();

while (!result.done) {
    console.log(result.value);
    result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);