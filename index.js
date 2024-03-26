// 1 -> 2 -> 3 -> 4 -> 5

// 1 -> 2 -> 3 -> null
// null <- 4 <- 5

// 1 -> 5 -> 2 -> 4 -> 3

function reoder(head) {
  if (head == null || head.next == null) return head;

  let slow = head,
    fast = head;
  // find the middle
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let pre = null,
    curr = slow.next;
  slow.next = null;

  while (curr != null) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  let first = head,
    second = pre;
  while (first && second) {
    let temp1 = first.next,
      temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
}
