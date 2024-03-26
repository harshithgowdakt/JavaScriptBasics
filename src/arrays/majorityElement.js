/**
Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. 
You may consider that such an element always exists in the array.

Example 1:
Input Format: N = 3, nums[] = {3,2,3}
Result: 3
Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

Example 2:
Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

Result: 2

Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

Example 3:
Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

Result: 4
*/

function majorityBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] == nums[j]) count++;

      // Corrected condition to check if count is greater than or equal to n/2
      if (count >= nums.length / 2) return nums[i];
    }
  }
  // Return null if no majority element is found
  return null;
}

// use map to store count
function majorityBetter(nums) {
  let numToCountMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numToCountMap.set(nums[i], (numToCountMap.get(nums[i]) || 0) + 1);
  }
  for (let [key, value] of numToCountMap) {
    if (value >= nums.length / 2) return key;
  }

  return null;
}

// moore's voting algo
// this algo only works if there is majority element exists
function majorityMooresAlgo(nums) {
  let element,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      element = nums[i];
    }

    if (nums[i] == element) {
      count++;
    } else {
      count--;
    }
  }

  // no need to do this step if majority element always exists
  let elementCout = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == element) elementCout;
    if (elementCout > nums.length / 2) return element;
  }
  return -1;
}
