function intersection(nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (res.length == 0 || res[res.length - 1] != nums1[i]) {
        res.push(nums1[i]);
        i++;
        j++;
      }
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}
console.log(intersection([2, 3, 4, 5, 8, 9], [1, 2, 3, 6, 7]));
