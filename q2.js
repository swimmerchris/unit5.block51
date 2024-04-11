class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseList(head, prev = null) {
    if (head == null) {
        return prev
    }
    const nextNode = head.next
    head.next = prev;
    return reverseList(nextNode, head);
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

const reversed = reverseList(head)

let curr = reversed;
const reversedArrayVals = [];

while (curr !== null) {
    reversedArrayVals.push(curr.value);
    curr = curr.next
}


console.log(reversedArrayVals)