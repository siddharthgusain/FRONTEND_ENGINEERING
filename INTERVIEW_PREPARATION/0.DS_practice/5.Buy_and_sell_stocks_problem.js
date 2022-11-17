/*
ou are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/

const input = [7, 1, 2, 5, 6, 4];

console.log("----------------TWO loops approach-----------")
// Traverse , for each day , find maximum in remaining array
// Find maximum profit for each day with two loops and then store in in other array
// Find maximum in this new array

function profitWithTwoLoops(input) {
    let profitArray = [];
    for (let i = 0; i < input.length; i++) {
        let maxProfit = 0;
        for (let j = i + 1; j < input.length; j++) {
            let profit = input[j] - input[i];
            if (profit > maxProfit)
                maxProfit = profit;
        }
        profitArray.push(maxProfit);
    }

    let maxProfitOfAll = 0;
    for (let i = 0; i < profitArray.length; i++) {
        if (profitArray[i] > maxProfitOfAll)
            maxProfitOfAll = profitArray[i];
    }

    return maxProfitOfAll;
}

console.log(profitWithTwoLoops(input));

// TC :- O(n2)
// SC:- O(n)

console.log("----------------Simple Iteration and finding maxprofit for that day if sell on that day-----------")

// const input = [7, 1, 2, 5, 6, 4];

function profitWithPointerApproach(input) {
    let leastPriceSoFar = Number.MAX_VALUE;
    let overAllProfit = 0;
    let profitIfSoldToday = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] < leastPriceSoFar)
            leastPriceSoFar = input[i];

        profitIfSoldToday = input[i] - leastPriceSoFar;

        if (profitIfSoldToday > overAllProfit)
            overAllProfit = profitIfSoldToday;
    }

    return overAllProfit;
}

console.log(profitWithPointerApproach(input))