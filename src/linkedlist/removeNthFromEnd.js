/**
 Given the head of a linked list, remove the nth node from the end of the list and return its head.

example 1
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 */

var removeNthFromEnd = function (head, n) {
  if (head == null) return null;

  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy,
    fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};
