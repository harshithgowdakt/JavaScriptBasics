class Solution {
    // Function to minimize the cost of reducing the heights.
    minimizeCost(height, n, k) {
        let dp = Array(height.length - 1).fill(0);

        for (let i = 1; i < height.length - 1; i++) {
            let minJump = Infinity;
            for (let j = i; j <= k; j++) {
                if (i - j >= 0) {
                    let jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
                    minJump = Math.min(jump, minJump);
                }
            }
            dp[i] = minJump;
        }
        return dp[height.length - 1];
    }
}