let i = 20;// not accessible outside module but indirectly used from exportedFunction
let j = 100; // not accessible outside this module 
export function exportedFunction() {
    console.log(i);
    console.log("Hi i am exported from another module");
    return i;
}
