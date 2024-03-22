function deleteLastNode(head) {
  // If the list is empty or contains only one node,
  // make it empty and return.
  if (head == null || head.next == null) {
    return null;
  }

  // Initialize two pointers - one for the current node and
  // the other for tracking the previous node.
  let prev = null;
  let curr = head;

  // Traverse the list until we reach the last node.
  while (curr.next != null) {
    prev = curr;
    curr = curr.next;
  }

  // Disconnect the last node from the list by setting the
  // previous node's next to null.
  prev.next = null;

  // Return the modified list's head.
  return head;
}
