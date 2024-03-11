/**
    Union of two arrays can be defined as the common and distinct elements in the two arrays.
    Given two sorted arrays of size n and m respectively, find their union.

    Example 1:

    Input: 
    n = 5, arr1[] = {1, 2, 3, 4, 5}  
    m = 3, arr2 [] = {1, 2, 3, 6, 7}
    Output: 
    1 2 3 4 5 6 7
    Explanation: 
    Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
*/

function unionOfArray(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  return Array.from(new Set([...set1, ...set2]));
}

function union(nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      if (res.length > 0 && res[res.length - 1] !== nums1[i])
        res.push(nums1[i]);
      i++;
    } else {
      if (res.length > 0 && res[res.length - 1] !== nums2[j])
        res.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    if (res.length > 0 && res[res.length - 1] !== nums1[i]) res.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    if (res.length > 0 && res[res.length - 1] !== nums2[j]) res.push(nums2[j]);
    j++;
  }

  return res;
}
