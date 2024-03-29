//https://leetcode.com/problems/reverse-linked-list-ii/description/

var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(-1, head),
    leftPre = dummy,
    curr = head;

  for (let i = 1; i < left; i++) {
    leftPre = curr;
    curr = curr.next;
  }

  let pre = null;

  for (let i = 0; i < right - left + 1; i++) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  leftPre.next.next = curr;
  leftPre.next = pre;

  return dummy.next;
};
