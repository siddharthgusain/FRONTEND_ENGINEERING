// One liner PIPE
pipe = (...functions) => (value) => {
    debugger;
    return functions
        .reduce((currentValue, currentFunction) => {
            debugger;
            return currentFunction(currentValue);
        }, value)
}

let getName = (person) => person.name;
let uppercase = (string) => string.toUpperCase();
let get6Characters = (string) => string.substring(0, 6);
let reverse = (string) => string
    .split('')
    .reverse()
    .join('')


let result = pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
)({ name: 'Buckethead' }) // { name: 'Buckethead' } == x

console.log(result);