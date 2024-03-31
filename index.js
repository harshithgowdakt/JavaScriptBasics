/**
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * [[1,3],[2,6],[8,10],[15,18]]
 * [[1,3]]
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];
  ans.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let lastEnd = ans[ans.length - 1][1];
    if (intervals[i][0] <= lastEnd) {
      ans[ans.length - 1][1] = Math.max(lastEnd, intervals[i][1]);
    } else {
      ans.push(intervals[i]);
    }
  }
  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
