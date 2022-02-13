var arr = [1,2,3];

console.log(arr);
console.log(arr[0]);

// common methods
console.log(arr.length);

for(var i = 0 ; i < arr.length;i++)
{
    console.log(arr[i]);
}

var string = "sid,tushar,messi,ronaldo";
arr = string.split(','); // makes array by spliting from ','
console.log(arr);

string = arr.join(','); // array to string , takes arguement
console.log(string);

var arr2 = [1,2,3,4];
var str = arr2.toString(); // array to string , always use comma as default

console.log(str);

// push , pop to remove and add from end
var arr3 = [1,23,2];
arr3.push(22); // acts as stack
console.log(arr3); 
arr3.pop();
console.log(arr3);

// shift and unshift to remove and add from start
var arr4 = [1,2,3,4];
arr4.unshift(2222);
console.log(arr4);
arr4.shift();
console.log(arr4);