//https://www.geeksforgeeks.org/problems/geek-jump/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=geek-jump

function minimumEnergy(height, n) {
    let dp = Array(height.length).fill(0);
    dp[0] = 0;

    for (let i = 1; i < height.length; i++) {
        let firstStep = dp[i - 1] + Math.abs(height[i] - height[i - 1]);
        let secondStep = Infinity;
        if (i > 1) {
            secondStep = dp[i - 2] + Math.abs(height[i] - height[i - 2])
        }

        dp[i] = Math.min(firstStep, secondStep);
    }

    return dp[height.length - 1];
}


function minimumEnergy(height, n) {
    function recurse(index, memo = {}) {
        if (index === 0) return 0;

        if (memo[index]) return memo[index];

        let left = recurse(index - 1, memo) + Math.abs(height[index] - height[index - 1]);

        let right = Infinity;
        if (index > 1) {
            right = recurse(index - 2, memo) + Math.abs(height[index] - height[index - 2]);
        }

        memo[index] = Math.min(left, right);
        return memo[index];
    }

    return recurse(height.length - 1, {});
}