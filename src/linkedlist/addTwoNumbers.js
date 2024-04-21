function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {

    function reverse(head) {
        let pre = null;
        let curr = head;
        while (curr != null) {
            let next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        return pre;
    }

    l1 = reverse(l1);
    l2 = reverse(l2);

    let dummyNode = new ListNode(-1);
    curr = dummyNode;
    let carry = 0;

    while (l1 != null || l2 != null || carry) {
        let val1 = l1 != null ? l1.val : 0;
        let val2 = l2 != null ? l2.val : 0;

        let sum = (val1 + val2 + carry) % 10;
        carry = Math.floor((val1 + val2 + carry) / 10);

        curr.next = new ListNode(sum);
        curr = curr.next;
        l1 = l1 != null ? l1.next : null;
        l2 = l2 != null ? l2.next : null;
    }

    return reverse(dummyNode.next);
};

let l1 = { val: 7, next: { val: 2, next: { val: 4, next: { val: 3, next: null } } } }

let l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } }
console.log(addTwoNumbers(l1, l2));