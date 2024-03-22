class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function arrayToList(nums) {
  let head = nums[0];
  let temp = head;
  for (let i = 0; i < nums.length; i++) {
    let n = new Node(nums[i]);
    temp.next = n;
    temp = n;
  }
  return head;
}

function traverseLsit(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.val);
    temp = temp.next;
  }
}

let head = arrayToList([1, 2, 3, 4, 4]);
traverseLsit(head);
