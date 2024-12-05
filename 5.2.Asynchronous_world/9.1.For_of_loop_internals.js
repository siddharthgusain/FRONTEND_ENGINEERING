var nums = [1, 5, 16];

for (
    // initialisation
    var iter = nums[Symbol.iterator](), // @@iterator method on nums
    next = iter.next(),
    num = next.value;

    // iterative check
    !next.done;

    // iterative expressions
    next = iter.next(),
    num = next.value
) {
    console.log(num);
}

/*

-> In the background the for...of translates to a simple for loop.

-> First this loop calls the @@iterator method on nums (in line 5) and then uses the 
returned iterator in iterating over it (the iterator is saved in iter).

*/