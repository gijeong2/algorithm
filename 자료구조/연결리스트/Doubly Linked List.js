// Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    remove(value) {
        let node = this.head;
        while (node.next.value !== value) {
            node = node.next;
        }
        if (node.next !== null) {
            node.next = node.next.next
        }
    }
    search(value) {
        let node = this.head;
        while (node.value !== value) {
            node = node.next;
        }
        return node;
    }
    display() {
        let node = this.head;
        let displayStr = ''
        while (node) {
            displayStr += `${node.value} > `;
            node = node.next;
        }
        console.log(displayStr.substring(0, displayStr.length - 2))
    }
}

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.remove(2)
linkedList.append(4)
linkedList.append(5)
linkedList.display()