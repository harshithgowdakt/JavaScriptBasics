class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function search(head, val) {
  let temp = head;
  while (temp != null) {
    if (temp.val == val) return true;
    temp = temp.next;
  }
  return false;
}

function arrayToList(nums) {
  let head = new Node(nums[0]);
  temp = head;
  for (let i = 1; i < nums.length; i++) {
    let node = new Node(nums[i]);
    temp.next = node;
    temp = temp.next;
  }
  return head;
}

let head = arrayToList([1, 2, 3, 4, 5, 6]);
console.log(search(head, 3));
