/**
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted list. The list should be made by splicing 
    together the nodes of the first two lists.

    Return the head of the merged linked list.

    Example 1:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2:
    Input: list1 = [], list2 = []
    Output: []

    Example 3:
    Input: list1 = [], list2 = [0]
    Output: [0]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let temp1 = list1,
    temp2 = list2;
  let dummyNode = new ListNode(-1),
    temp = dummyNode;

  while (temp1 != null && temp2 != null) {
    if (temp1.val < temp2.val) {
      temp.next = temp1;
      temp = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp = tempe2;
      temp2 = temp2.next;
    }
  }
  if (temp1 != null) {
    temp.next = temp1;
  }
  if (temp2 != null) {
    temp.next = temp2;
  }
  return dummyNode.next;
};
