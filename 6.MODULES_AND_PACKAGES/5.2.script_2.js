a = 20; // we are simply modifying "a" defined in script1, this can be solved with module
b = 290; // we are modifying b
console.log(a);
console.log(b);

// NOTE:- both script 1 and script 2 are sharing same "JS ENGINE instance" or same renderer process

// Note theres no import statement for a and b , because these are normal scripts not "modules"