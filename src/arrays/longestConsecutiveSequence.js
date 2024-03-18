/**
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

const longestConsecutiveSequence = function (nums) {
  let maxSequenceLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let currenNum = nums[i];
    let currentSeqLen = 1;
    while (nums.includes(currenNum + 1)) {
      currenNum++;
      currentSeqLen++;
    }
    maxSequenceLength = Math.max(maxSequenceLength, currentSeqLen);
  }
  return maxSequenceLength;
};

const longestConsecutiveSequenceOpti = function (nums) {
  if (!nums || nums.length === 0) {
    return 0; // Return 0 if the array is empty or null
  }

  let numsSet = new Set(nums);
  let maxSequenceLength = 0;

  for (let num of numsSet) {
    // Iterate through the set to ensure each number is checked only once
    // check if it is the first number
    // [100, 4, 200, 1, 3, 2] - in this case 1, 100, 200 are the first number
    // we doing this by checking the if there is previous number
    if (!numsSet.has(num - 1)) {
      // Check if it's the start of a sequence
      let currNum = num;
      let currLen = 1;

      // continue to increase the count till sequence exists
      // 1,2,3,4
      while (numsSet.has(currNum + 1)) {
        // Count the length of the sequence
        currNum++;
        currLen++;
      }

      maxSequenceLength = Math.max(currLen, maxSequenceLength); // Update the maximum sequence length if necessary
    }
  }

  return maxSequenceLength;
};
