/**
  Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.
Example 1:
Input Format: A = [4, 2, 2, 6, 4] , k = 6
Result: 4
Explanation: The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

Example 2:
Input Format: A = [5, 6, 7, 8, 9], k = 5
Result: 2
Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

Approach
1. use map to store the previous xor
2. check if the required xor for current xor present in the map
3. if yes increament the counter
4. put the current xor in the map

let reqXor = currentXor ^ k;
*/

const xorSubArrayCount = function (nums, k) {
  let freqMap = new Map();
  let currXor = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    currXor ^= nums[i];
    if (currXor === k) count++;

    let reqXor = currXor ^ k;
    count += freqMap.get(reqXor) ?? 0;
    freqMap.set(currXor, (freqMap.get(currXor) || 0) + 1);
  }

  return count;
};
