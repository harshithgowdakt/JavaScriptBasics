// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let value1 = l1 !== null ? l1.val : 0;
    let value2 = l2 !== null ? l2.val : 0;

    let sum = value1 + value2 + carry;
    let val = sum % 10; // Correct calculation for the new digit
    carry = Math.floor(sum / 10); // Correct calculation for carry

    curr.next = new ListNode(val); // Insert new node with correct value
    curr = curr.next; // Move pointer forward

    // Move to the next nodes if they exist
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next; // Return the next of dummyHead to skip the initial 0 node
};
