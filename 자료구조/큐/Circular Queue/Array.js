// Array

class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('queue is full');
            return;
        }
        this.queue[this.rear] = item;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size++;
    }

    dequeue() {
        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size--;
        return item;
    }

    peek() {
        return this.queue[this.front];
    }

    isFull() {
        return this.maxSize === this.size;
    }

    getSize() {
        return this.size;
    }
}


const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.peek());