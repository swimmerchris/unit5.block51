class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeElement(head, element) {
    if (head == null) {
        return null
    }
    head.next = removeElement(head.next, element)
    if (element === head.value) {
        return head.next
    } else {
        return head;
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(6)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)

const removalItem = 6

const cleanList = removeElement(head, removalItem)

let curr = cleanList;
const cleanListArrayVals = [];

while (curr !== null) {
    cleanListArrayVals.push(curr.value);
    curr = curr.next
}


console.log(cleanListArrayVals)