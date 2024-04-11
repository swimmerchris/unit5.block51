class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function shuffle(head) {
    if (!head || !head.next) {
        return head;
    }
    const temp = head.next
    const newHead = shuffle(temp.next);

    temp.next = head;
    head.next = newHead;

    return temp;
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)

const newList = shuffle(head)

let curr = newList;
const newListArrayVals = [];

while (curr !== null) {
    newListArrayVals.push(curr.value);
    curr = curr.next
}


console.log(newListArrayVals)