//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];

    let combinations = [],
        currCombination = [],
        digitsToCharMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };

    function backtrack(startIndex, currCombination) {
        if (currCombination.length == digits.length) {
            combinations.push(currCombination.join(''));
            return;
        }


        for (let char of digitsToCharMap[digits[startIndex]]) {
            currCombination.push(char);
            backtrack(startIndex + 1, currCombination);
            currCombination.pop();
        }
    }

    backtrack(0, []);
    return combinations;
};