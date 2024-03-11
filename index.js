function union(nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      if (res.length == 0 || res[res.length - 1] !== nums1[i])
        res.push(nums1[i]);
      i++;
    } else {
      if (res.length == 0 || res[res.length - 1] !== nums2[j])
        res.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    if (res.length == 0 || res[res.length - 1] !== nums1[i]) res.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    if (res.length == 0 || res[res.length - 1] !== nums2[j]) res.push(nums2[j]);
    j++;
  }

  return res;
}
console.log(union([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
