/**
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr != null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let L = 0,
    R = arr.length - 1;

  while (L < R) {
    if (arr[L++] != arr[R--]) return false;
  }
  return true;
};
