/**
    Given two integer arrays nums1 and nums2, 
    return an array of their intersection. 
    Each element in the result must be unique and
    you may return the result in any order.

    Example 1:

    Input: nums1 = [1,2,2,], nums2 = [2,2,3]
    Output: [2]
    Example 2:

    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
    Explanation: [4,9] is also accepted.
*/

function interSectionOfArray(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  return Array.from(new Set([...set1].filter((num) => set2.has(num))));
}

// sorted array
function intersection(nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (res.length == 0 || res[res.length - 1] != nums1[i]) {
        res[i];
        i++;
        j++;
      } else if (nums1[i] < nums2[j]) {
        i++;
      } else {
        j++;
      }
    }
  }
  return res;
}
