// One liner PIPE
pipeOneLiner = (...fns) => x => fns.reduce((v, f) => f(v), x)


// FUNCTIONS TO BE PIPED 
let getName = (person) => person.name;
let uppercase = (string) => string.toUpperCase();
let get6Characters = (string) => string.substring(0, 6);
let reverse = (string) => string
    .split('')
    .reverse()
    .join('')


// PIPE without arrow function
function pipeWithoutArrowFunction(...functions) {
    return function (value) { // value will be "Buckethead"
        let result = functions.reduce((currentValue, currentFunction) => { // we are reducing from left-to-right
            return currentFunction(currentValue);
        }, value);

        return result;
    }
}

let result = pipeWithoutArrowFunction(
    getName,
    uppercase,
    get6Characters,
    reverse
);

console.log(result({ name: "Buckethead" })); // TEKCUB

//// PIPE with arrow function
pipe = (...functions) => (value) => { // this actually is function currying if you observe carefully
    debugger;
    return functions
        .reduce((currentValue, currentFunction) => {
            debugger;
            return currentFunction(currentValue);
        }, value)
}





let result1 = pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
)({ name: 'Buckethead' }) // { name: 'Buckethead' } == x

console.log(result1); //TEKCUB