/*
 An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as 
soon as it is defined.
*/

(
    function () {
        console.log("IIFE WITH NORMAL FUNCTION");
    }
)();

// defined and called at the same time;
// Global execution context or simple JS file can be considered as IIFE as well

// ARROW IIFE
(
    () => {
        console.log("IIFE WITH ARROW")
    }
)()

    //----------ASYNC FUNCTION-------------
    (
        async () => {
            console.log("IIFE WITH ASYNC FUNCTION")
        }
    )()

    // IIFE is a design pattern which is also known as a Self-Executing Anonymous Function

    /*
    TWO MAJOR PARTS OF IIFE:-
    
    1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
    This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
    
    2. The second part creates the immediately invoked function expression () through which the
    JavaScript engine will directly interpret the function.
    
    */


    //---------------------USE CASES OF IIFE----------------

    //---------------1. AVOID POLLUTING GLOBAL NAMESPACE-------------

    /*
    -> Because our application could include many functions and global variables from different source 
    files, it's important to limit the number of global variables. 
    
    -> If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
     
    -> As we will not reuse the code again, using IIFE in this case is better than using a function 
    declaration or a function expression.
    
    */

    (
        () => {
            // some initiation code
            let firstVariable;
            let secondVariable;
        }
    )();

console.log(firstVariable) // no defined
// firstVariable and secondVariable will be discarded after the function is executed.

//---------------------2.MODULE DESIGN PATTERN-----------------

/*
-> "JAVASCRIPT MODULES" are the most prevalently used "DESIGN PATTERNS" for keeping particular pieces of code independent 
of other components. This provides "LOOSE COUPLING" to support well-structured code.

-> For those that are familiar with object-oriented languages, modules are JavaScript “classes”. 
One of the many advantages of classes is encapsulation - protecting states and behaviors from being 
accessed from other classes. 

-> The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.
-> Its a way to provide encapsulation in "FUNCTIONAL PROGRAMMING" as global variable are a pain in functional paradigm
*/

var modulePattern = (function () {
    var privateVariable = "private";
    let privateFunction = () => {
        console.log("private function"); // this will be printed first as IIFE is called here
    }
    privateFunction();
    return {
        accessPrivateVariable: function () {
            return privateVariable;
        }
    }
})();

console.log(modulePattern.accessPrivateVariable());// private
console.log(modulePattern.privateVariable) // undefined


    //-----------------USED IN LIBRARIES AND BUNDLERS LIKE WEBPACK
    /*
    -> IIFE are used extensively in most of the JavaScript files that composed the library. 
    -> One typical use case of an IIFE and closure combination is to create a private state for any variable.
    */

    (function () {
        var loc = "global";
        function logger() {
            console.log(loc);         // logs global
            console.log(window.loc);  // logs undefined
        }
        logger();
    })()

    // NOTE :- If you see the bundle spitted by webpack , it is actually and IIFE used to prevent global pollution