
function minimizeCost(height, n, k) {

    function recurse(index, memo = {}) {
        if (index <= 0) return 0;

        if (memo[index]) return memo[index];

        let minJump = Infinity;
        for (let j = 1; j <= k; j++) {
            if (index - j >= 0) {
                let jump = recurse(index - j, memo) + Math.abs(height[index - j] - height[index]);
                minJump = Math.min(jump, minJump);
            }
        }

        memo[index] = minJump;
        return memo[index];
    }

    return recurse(height.length - 1, {});
}


function minimizeCost(height, n, k) {
    let dp = Array(height.length).fill(Infinity);
    dp[0] = 0; // Starting point cost is 0

    for (let i = 1; i < height.length; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                let jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
                dp[i] = Math.min(dp[i], jump);
            }
        }
    }
    return dp[height.length - 1];
}