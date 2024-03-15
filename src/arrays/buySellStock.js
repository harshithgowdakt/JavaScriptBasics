/**
    Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
    
    Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and 
    sell on day 5 (price = 6), profit = 6-1 = 5.
*/

function maxProfit(prices) {
  let maximumProfit = 0,
    buyValue = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    buyValue = Math.min(buyValue, prices[i]);
    maximumProfit = Math.max(maximumProfit, prices[i] - buyValue);
  }
  return maximumProfit;
}
