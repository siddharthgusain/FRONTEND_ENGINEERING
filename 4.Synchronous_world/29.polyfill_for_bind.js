//A polyfill is a piece of code (usually JavaScript on the Web) used to provide
// modern functionality on older browsers that do not natively support it.
// for e.g if we dont have support for bind() method, so we can implement it on our own
// implementing our own functionailty sometimes known as polyfill

// adding new function to prototype so that all function inherites this function

Function.prototype.my_bind = function (...args) {
    
    let current_obj = this; // this points to current function which is calling my_bind
    let rest_params = args.slice(1); // rest params other than object

    return function(...args1) {

        current_obj.apply(args[0],[...rest_params,...args1]); // args[0] == object passed as arguement

    }
}

let obj1 = {
    name:"sid",
    age:20
} ;

function printName(subject,place){
    console.log(this.name + " " + subject + " " + place);
}

let obj1_printName = printName.my_bind(obj1 , "maths");

obj1_printName("Dilshad Garden");