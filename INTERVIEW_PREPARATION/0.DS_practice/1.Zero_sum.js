// Find first pair with zero sum;
// [-5,-4,-3,-2,0,2,4,6,8]
// (-4,4)

// For zero , we need negative of same number
// "array is unsorted"

const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

console.log("-----------------------------BRUTE FORCE--------------------")
// simple method with two loops and simple iteration

function printPairBruteForce(input) {
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] + element == 0) {
                console.log(i, j);
            }
        }
    }
}

printPairBruteForce(input);

// TC:- O(n^2)
// SC : O(1)

console.log("-----------------------------WITH HASHMAP--------------------")
// can we do it better with Hashmap?
// yes we can 

function printPairWithHashMap(input) {
    let hashMap = new Map();
    // traverse and check if the value alread exists in hashmap , we can do this in one pass
    for (let i = 0; i < input.length; i++) {
        let diff = -(input[i]);
        if (hashMap.get(diff)) {// if the difference is already present 
            console.log(hashMap.get(diff), i);
            break;
        }
        hashMap.set(input[i], i);
    }
}

printPairWithHashMap(input);
// TC:- O(n)
// SC : O(n)


console.log("-----------------------------WITH TWO POINTER IF ARRAY IS SORTED--------------------")
// What if array is "already sorted" , can you do it in less complexity??
const sortedInput = input.sort();
//[-2, -3, -4, -5, 0, 2, 4, 6, 8]
console.log(sortedInput)
// Now we have sorted input , two pointer can be applied.

function printPairWithTwoPointer(sortedInput) {
    let left = 0;
    let right = sortedInput.length - 1;

    while (left < right) {
        let sum = sortedInput[left] + sortedInput[right];
        if (sum == 0) {
            console.log(left, right);
            break; // find first pair and break
        }
        else if (sum < 0)
            left++;
        else
            right--;
    }
}

printPairWithTwoPointer(sortedInput)
// TC:- O(n)
// SC : O(1)

