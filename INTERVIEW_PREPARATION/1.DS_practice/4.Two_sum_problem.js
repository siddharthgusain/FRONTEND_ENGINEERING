// Target = n
// Find Pair which adds to target
// Assume only "one solution" is possible

const input = [9, 2, 3, 4, 1];
const target = 7;

console.log("----------------TWO loops approach-----------")

function twoSumWithLoops(input, target) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            let sum = input[i] + input[j];
            if (sum == target)
                return [i, j];
        }
    }
}

console.log(twoSumWithLoops(input, target))

// TC:- O(n^2)
// SC:- O(1)

console.log("----------------With hashmap-----------")

function twoSumWithHashMap(input, target) {
    let hashMap = {};
    for (let i = 0; i < input.length; i++) {
        let ele = input[i];
        let diff = target - input[i];
        if (hashMap[diff] in hashMap)
            return [hashMap[diff], i];
        else
            hashMap[ele] = i; // storing (element:index) pair in hashmap
    }

    return []; // if no pair found
}

console.log(twoSumWithHashMap(input, target));

// TC:- O(n)
// SC:- O(n)


console.log("----------------TWO SUM IF ARRAY IS SORTED-----------")

const sortedInput = input.sort();
console.log("SORTED ARRAY", sortedInput)
// As array is sorted we can use some kind of two pointer
// on right side we will have bigger number 
// on left side we will have smaller number

function twoSumWithTwoPointer(sortedInput, target) {

    let leftPointer = 0;
    let rightPointer = input.length - 1;

    while (leftPointer < rightPointer) {
        let sum = sortedInput[leftPointer] + sortedInput[rightPointer];

        if (sum == target) {
            return [leftPointer, rightPointer];
        } else if (sum > target) { // if sum is greater , try to find smaller number from right
            rightPointer--;
        } else { // if sum is smaller , try to find greater number from left
            leftPointer++;
        }
    }

    return [];
}

console.log(twoSumWithTwoPointer(sortedInput, target));

// TC:- O(n)
// SC:- O(1)


