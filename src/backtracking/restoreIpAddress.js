// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let ans = [];

    function backtrack(startIndex, currIp) {
        if (currIp.length == 4 && startIndex == s.length) {
            ans.push(currIp.join("."));
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            let currNum = parseInt(s.slice(startIndex, i + 1));
            if (currNum <= 255 && (startIndex == i || s[startIndex] != "0")) {
                currIp.push(currNum);
                backtrack(i + 1, currIp);
                currIp.pop();
            }
        }
    }

    backtrack(0, []);
    return ans;
};