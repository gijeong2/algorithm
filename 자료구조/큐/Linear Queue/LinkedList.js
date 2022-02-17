// Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(item) {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue() {
        const item = this.head.value;
        this.head = this.head.next;
        this.size--;
        return item;
    }

    peek() {
        return this.head.value;
    }

    getSize() {
        return this.size;
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.peek();