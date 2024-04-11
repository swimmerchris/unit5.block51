class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeArrays(list1, list2) {
    if (list1 == null) {
        return list2
    } else if (list2 == null) {
        return list1;
    } else if (list1.value < list2.value) {
        list1.next = mergeArrays(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeArrays(list1, list2.next);
        return list2;
    }

}

let node1list1 = new Node(1)
node1list1.next = new Node(2)
node1list1.next.next = new Node(4)

let node1list2 = new Node(1)
node1list2.next = new Node(3)
node1list2.next.next = new Node(4)

const mergedlist = mergeArrays(node1list1, node1list2)

let curr = mergedlist;
const mergelistarry = [];

while (curr !== null) {
    mergelistarry.push(curr.value);
    curr = curr.next
}


console.log(mergelistarry)