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
