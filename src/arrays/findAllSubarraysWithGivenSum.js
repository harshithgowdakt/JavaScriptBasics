/**
Problem Statement: Given an array of integers and an integer k, 
return the total number of subarrays whose sum equals k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input Format: N = 4, array[] = {3, 1, 2, 4}, k = 6
Result: 2
Explanation: The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

Example 2:
Input Format: N = 3, array[] = {1,2,3}, k = 3
Result: 2
Explanation: The subarrays that sum up to 3 are [1, 2], and [3].
*/

function findAllSubarraysWithGivenSum(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

function findAllSubarrays(nums, k) {
  let count = 0,
    L = 0,
    R = 0,
    sum = 0;
  while (R < nums.length) {
     sum += nums[R];

     while (sum > k && L <= R) {
       sum -= nums[L];
       L++;
     }

     if (sum === k) {
       count++;
       // Additional logic to handle cases where subtracting nums[L]
       // does not immediately cause sum to be less than k, due to the presence
       // of zero or negative numbers could be added here.
     }
  }
  return count;
}
