setTimeout(function () {
    console.log("I am called immediately?");
}, 0);

/* 
This doesnt gurantee that settimeout will run immedietaly 
It all depends on state of call stack if it is empty or not
Settimeout gives the "MINIMUM TIME" after which callback will be 
executed in ideal condition.
*/


