/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
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

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function arrayToList(nums) {
  let head = new ListNode(nums[0]);
  let temp = head;
  for (let i = 1; i < nums.length; i++) {
    let n = new ListNode(nums[i]);
    temp.next = n;
    temp = n;
  }

  return head;
}

reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4);
