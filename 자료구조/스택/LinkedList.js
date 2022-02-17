// Linked List

class Node {
    constructor(item) {
        this.value = item;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        const item = this.top.value;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    getSize() {
        return this.size;
    }

    peek() {
        return this.top.value;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.push(4)
stack.pop()
console.log(stack.peek())