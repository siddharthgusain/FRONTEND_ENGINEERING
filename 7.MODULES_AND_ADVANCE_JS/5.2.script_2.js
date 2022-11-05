a = 20; // we are simply modyfying "a" defined in script1, this can be solved with module
b = 290;
console.log(a);
console.log(b)

// NOTE:- both script 1 and script 2 are sharing same JS engine instance or same renderer process

// Note theres no import statment for a and b , because these are normal scripts not "modules"