// Array

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.queue[this.rear++] = item;
    }

    dequeue() {
        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return item
    }

    peek() {
        return this.queue[this.front];
    }

    getSize() {
        return this.rear - this.front
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.peek());
