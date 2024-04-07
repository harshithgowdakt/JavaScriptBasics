/**https://leetcode.com/problems/group-anagrams/description/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagramMap = new Map();

    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (!anagramMap.has(sorted)) anagramMap.set(sorted, []);
        anagramMap.get(sorted).push(str);
    }
    return Array.from(anagramMap.values());
};