var maxArea = function (height) {
  let start = 0,
    end = height.length - 1,
    res = 0;

  while (start < end) {
    let area = (start - end) * Math.min(height[start], height[end]);
    res = Math.max(area, res);
    if (start < end) {
      start++;
    } else {
      end--;
    }
  }
  return res;
};

console.log(maxArea([(2, 3, 4, 5, 18, 17, 6)]));
