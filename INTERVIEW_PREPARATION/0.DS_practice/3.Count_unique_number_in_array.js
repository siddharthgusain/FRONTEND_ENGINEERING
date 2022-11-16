// Given Array --> consider is unsorted
// Count unique numbers in it.

let input = [5, 5, 2, 0, 1, 1, 7, 7, 9];

console.log("----------------TWO loops approach-----------")

function countUniqueWithSorting(input) {
    let sortedArray = input.sort();
    console.log(sortedArray)
    let count = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        while (input[i + 1] == input[i] && i < input.length - 1)
            i++;
        count++;
    }

    return count;
}

console.log(countUniqueWithSorting(input));


