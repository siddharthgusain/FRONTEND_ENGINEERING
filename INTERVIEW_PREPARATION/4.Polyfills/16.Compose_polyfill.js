// One liner PIPE
let compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

let getName = (person) => person.name;
let uppercase = (string) => string.toUpperCase();
let get6Characters = (string) => string.substring(0, 6);
let reverse = (string) => string
    .split('')
    .reverse()
    .join('')


let result = compose(
    reverse,
    get6Characters,
    uppercase,
    getName,
)({ name: 'Buckethead' }) // { name: 'Buckethead' } == x

console.log(result);