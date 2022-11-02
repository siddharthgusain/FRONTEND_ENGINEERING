//E.g 1:- // function outerMost(){
//     var outerMostVar = 1000;
//     function inner(){
//         var innerVar = 7;

//         function innerMost(){
//             console.log(innerVar , outerMostVar);
//         }

//         innerMost();
//     }
//     inner();
// }

// outerMost();


// E.g 2 :-

function outer()
{
    var x = 10 , y = 12; 
    // y is garbage collected and x is present inside closure because it is being used 
    // inside inner function
    return function inner(){
        console.log(x); // "x" is only present in closure of inner not "y"
    }
}

var res = outer();

res(); // prints 10

// Function bundled with its lexical environment is known as a closure.
// THats why closure can take up lot of RAM space , thats why its important to understand closure