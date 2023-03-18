function* sequence() {
    console.log("First!");
    yield 1;

    console.log("Second!");
    yield 3;

    console.log("Third!");
    yield 5;

    console.log("Done!");
}

var seq = sequence();
console.log(seq);

/*
-> When sequence() is called , the interpreter realises that it is a generator 
function's call and likewise "returns an iterator right away" - the function's body isn't 
executed to even a single percent.

-> This returned iterator runs over the yield values one-by-one defined in the generator, 
each time its next() method is called.

*/