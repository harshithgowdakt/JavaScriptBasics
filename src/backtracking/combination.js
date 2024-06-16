/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let combinations = [];

    function backtrack(start, currCombination) {
        if (currCombination.length == k) {
            combinations.push([...currCombination]);
            return;
        }

        for (let i = start; i <= n; i++) {
            currCombination.push(i);
            backtrack(i + 1, currCombination);
            currCombination.pop();
        }
    }
    backtrack(1, []);
    return combinations;
};