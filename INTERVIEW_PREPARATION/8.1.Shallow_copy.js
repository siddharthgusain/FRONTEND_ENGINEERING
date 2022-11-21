/*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. As a result, when you change either
the source or the copy, you may also cause the other object to change too — and so, 
you may end up unintentionally causing changes to the source or copy that you don't expect
*/

/*
In JavaScript, all standard built-in object-copy operations 
(spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), 
and Object.create()) create shallow copies rather than deep copies.
*/

//--------------Array example----------------
let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1;

arr2[0] = 10;

console.log(arr2); // [10,2,3,4,5]
console.log(arr1);// [10,2,3,4,5]

// arr2 contains pointer/reference to arr1 base index , so both gets changed

//------------------Object example-------------
let obj1 = {
    "firstName": "sid"
}

let obj2 = obj1;

obj2["lastName"] = "gusain"

console.log(obj1); // obj1
console.log(obj2); // obj2


//-----------A complex example with array and objects-----------
let ingredients_list = [
    "noodles",
    {
        list: ["eggs", "flour", "water"]
    }
];

let ingredients_list_copy = ingredients_list;

ingredients_list_copy[0] = "Changed noodles";
ingredients_list_copy[1].list = ["lol"];

console.log(ingredients_list);
console.log(ingredients_list_copy);

// Most of the inbuilt methods does shallow copy , there is only one way to do deep clone, we will dicuss it now