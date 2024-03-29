//https://leetcode.com/problems/remove-nodes-from-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  const reverseList = function (tempHead) {
    let curr = tempHead,
      pre = null;
    while (curr) {
      let nxt = curr.next;
      curr.next = pre;
      pre = curr;
      curr = nxt;
    }
    return pre;
  };

  let curr = reverseList(head),
    max = 0;
  let dummy = new ListNode(-1, curr),
    pre = null;
  while (curr) {
    if (curr.val < max) {
      pre.next = curr.next;
    } else {
      max = curr.val;
      pre = curr;
    }
    curr = curr.next;
  }

  return reverseList(dummy.next);
};
