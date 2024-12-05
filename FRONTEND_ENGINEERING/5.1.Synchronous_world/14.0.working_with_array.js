var arr = [1, 2, 3]; // array literal
var arr1 = new Array(1, 2, 3); // Constructor of Array Object

console.log(arr);
console.log(arr[0]);

// common methods
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var string = "sid,tushar,messi,ronaldo";
arr = string.split(','); // makes array by spliting from ','
console.log(arr);

string = arr.join(','); // array to string , takes arguement
console.log(string);

var arr2 = [1, 2, 3, 4];
var str = arr2.toString(); // array to string , always use comma as default

console.log(str); "1,2,3,4,5"

// push , pop to remove and add from end
var arr3 = [1, 23, 2];
arr3.push(22); // acts as stack
console.log(arr3);
arr3.pop();
console.log(arr3);

// shift and unshift to remove and add from start
var arr4 = [1, 2, 3, 4];
arr4.unshift(2222);
console.log(arr4); // [2222,1,2,3,4]
arr4.shift(); // return 2222
console.log(arr4); // 

// arr --> [1,2,3,4]

//------SLICE-------------
console.log(arr4.slice(1, 3)); //[2,3]


// -------SPLICE------------
const myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 3, 'a', 'b', 'c', 'd');

/* myArray is now ["1", "a", "b", "c", "d", "5"]
This code started at index one (or where the "2" was),
removed 3 elements there, and then inserted all consecutive
elements in its place.
*/

// ----- Flattening array---------
const multiArr = [1, 2, [3, 4, 5]];
console.log(multiArr.flat()) // [1,2,3,4,5]