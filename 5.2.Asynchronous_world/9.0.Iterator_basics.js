/*
-> In JavaScript ,an iterator is an object which defines a sequence and potentially a return 
value upon its termination.
-> An iterator is a "JavaScript object" that implements the iterator protocol.

*/

/*
Now what is the iterator protocol?

-> The iterator protocol is simply a set of rules which must be obeyed by an object in 
order for it to be called an iterator.

-> The protocol states that the object must have a next() method. This method shall return 
an object with the following two properties:
    1. done - a Boolean value indicating whether the iterator has reached its last value.
    2. value - holds the next value in a given sequence.

*/

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) { // if iteration not completed yet
                result = {
                    value: nextIndex, // closure is used here
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

// MAKING A ITERATOR OBJECT THAT WILL ITERATE OVER AND ARRAY
let arr = [1, 2, 3, 4, 5, 6];

function makeIterator(arr) {
    var i = 0;
    return {
        next: function () {
            if (i > arr.length - 1)
                return { value: undefined, done: true }
            return { value: arr[i++], done: false }
        }
    }
}

const iterator = makeIterator(arr);

console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next().value); // 1


// USING INBUILT ITERATOR FUNCTION INSIDE ARRAY OBJECT
var nums = [1, 5, 16];

var iter = nums[Symbol.iterator](); // Symbol.iterator is defined inside "Array.prototype"

iter.next(); // {value: 1, done: false}
iter.next(); // {value: 5, done: false}
iter.next(); // {value: 16, done: false}
iter.next(); // {value: undefined, done: true}

/*
----------------DESCRIPTION OF ABOVE CODE---------------
-> A variable iter is declared and assigned an expression. This expression is nums[Symbol.iterator](). 
The way it evaluates is described as follows:

-> The Symbol.iterator returns a symbol which is then first searched on the nums object 
(remember that an array is also an object and therefore can also have properties).

-> Since there is no match found for the symbol on nums, searching shifts to the prototype 
of nums i.e the Array.prototype object.

-> Here, indeed a symbol property - Symbol.iterator - is found and it holds a functional value. 
In other words, it's a method defined on the prototype.

-> Finally, this method is invoked, which results in an iterator object being returned. 
This iterator gets saved in iter and so the execution of line 2 completes.

*/