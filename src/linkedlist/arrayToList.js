class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function arrayToList(nums) {
  let head = new Node(nums[0]);
  let temp = head;
  for (let i = 1; i < nums.length; i++) {
    let n = new Node(nums[i]);
    temp.next = n;
    temp = n;
  }

  return head;
}

console.log(arrayToList([1, 2, 3, 4, 4]));
