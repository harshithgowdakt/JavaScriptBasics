//https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

function isSubsetSum(arr, n, sum) {
    function dfs(index, currSum, memo) {
        if (currSum === sum) return true;
        if (index >= arr.length || currSum > sum) return false;

        let key = `${index},${currSum}`;
        if (memo[key] !== undefined) return memo[key];

        let skip = dfs(index + 1, currSum, memo);
        if (skip) {
            memo[key] = true;
            return true;
        }

        let add = dfs(index + 1, currSum + arr[index], memo);
        if (add) {
            memo[key] = true;
            return true;
        }

        memo[key] = false;
        return false;
    }

    return dfs(0, 0, {});
}

function isSubsetSumTabulation(arr, n, sum) {
    let dp = Array(sum + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = sum; j >= arr[i]; j--) {
            dp[j] = dp[j] || dp[j - arr[i]];
        }
    }

    return dp[sum];
}