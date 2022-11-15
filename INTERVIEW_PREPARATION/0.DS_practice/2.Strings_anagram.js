// Check whether strings are anagrams or not

/*
-> Both string should have equal length
-> If length is equal:-
    -> check if they have same characters , arrangement could be different but frequency should
    be same
*/

let str1 = "Hello";
let str2 = "lloHs"

console.log("-----------------------------WITH SORTING--------------------")

function isAnagramWithSorting(str1, str2) {
    if (str1.length !== str2.length)
        return 0;
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    for (let i = 0; i < str1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i])
            return 0;
    }

    return 1;
}


if (isAnagramWithSorting(str1, str2)) {
    console.log("ANAGRAM")
} else {
    console.log("NOT ANAGRAM")
}

// TC:- O(nlogn)
// SC:- O(n)

console.log("-----------------------------WITH HASHMAP--------------------")
// create map from string 1 with (character,frequency) map
// traverse string2 and check in map and keep on decreasing frequency
// traverse map and check if any frequency is not zero than not anagram

function isAnagramWithMap(str1, str2) {
    if (str1.length !== str2.length)
        return 0;

    let frequencyMap = {};
    for (let i = 0; i < str1.length; i++) {
        let character = str1[i];
        if (frequencyMap[character])
            frequencyMap[character]++;
        frequencyMap[character] = 1;
    }

    for (let i = 0; i < str1.length; i++) {
        let character = str2[i];
        if (frequencyMap[character])
            frequencyMap[character]--;
    }

    for (let key in frequencyMap) {
        if (frequencyMap[key])
            return 0;
    }

    return 1;
}

if (isAnagramWithMap(str1, str2)) {
    console.log("ANAGRAM")
} else {
    console.log("NOT ANAGRAM")
}

// TC:- O(n)
// SC:- O(n)