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
        console.log(x);
    }
}

var res = outer();

res(); // prints 10