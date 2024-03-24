/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null) return null;

  let dummy = new ListNode(0); // Dummy node to handle edge cases
  dummy.next = head;
  let slow = dummy,
    fast = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next; // Return the head of the modified list
};
