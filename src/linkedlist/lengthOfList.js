function lengthOfList(head) {
  let curr = head,
    count = 0;
  while (curr != null) {
    count++;
    curr = curr.next;
  }
  return count;
}
