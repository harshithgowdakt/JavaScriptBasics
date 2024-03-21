class Node {
  constructor(data1, next1 = null) {
    this.data = data1;
    this.next = next1;
  }
}
// Creating a Node 'x' with the first element of the array
let x = new Node(2);
// Creating a reference 'y' pointing to the same Node 'x'
let y = x;
// Printing the reference 'y', which represents the memory address of the Node 'x'
console.log(y);
