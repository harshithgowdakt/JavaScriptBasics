//https://leetcode.com/problems/palindrome-partitioning/description/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let partitions = [];

    function isPalidrome(str, start, end) {
        while (start <= end) {
            if (str[start] != str[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    function backtrack(startIndex, currPartition) {
        if (startIndex == s.length) {
            partitions.push([...currPartition]);
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            if (isPalidrome(s, startIndex, i)) {
                currPartition.push(s.slice(startIndex, i + 1));
                backtrack(i + 1, currPartition);
                currPartition.pop();
            }
        }
    }

    backtrack(0, []);
    return partitions;
};