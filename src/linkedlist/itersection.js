//https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let l1 = headA,
    l2 = headB;

  while (l1 != l2) {
    if (l1 != null) l1 = l1.next;
    else l1 = headB;

    if (l2 != null) l2 = l2.next;
    else l2 = headA;
  }

  return l1;
};
