/**
For a given Singly LinkedList, insert a node at the beginning of the linked list.


Example 1:

Input: List = 10->20->30->40->null, Node = 0
Output: 0->10->20->30->40->null
Explanation: Inserted the given node at the beginning of the linked list.

Example 2:
Input: List = 100->200->300->null, Node =700
Output: 700->100->200->300->null
Explanation: Inserted the given node at the beginning of the linked list.
*/

const insert = function (head, val) {
  let newNode = new ListNode(val);
  newNode.next = head;
  head = newNode;

  return head;
};
