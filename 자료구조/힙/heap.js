// 최대힙

class Heap {
    constructor() {
        this.heap = [];
    }
    push(value) {
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex -1/ 2);

        while (this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2)
        }
    }
    pop() {
        let leftIndex = 1;
        let rightIndex = 2;
        let currentIndex = 0
        const rootNode = this.heap[currentIndex]
        this.heap[currentIndex] = this.heap.pop();
        while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
            const maxIndex = this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[maxIndex]
            this.heap[maxIndex] = temp;
            currentIndex = maxIndex
            leftIndex = currentIndex * 2
            rightIndex = currentIndex * 2 + 1
        }
        return rootNode;
    }
    display() {
        console.log(this.heap)
    }
}

const heap = new Heap();
heap.push(3)
heap.push(5)
heap.push(2)
heap.push(7)
heap.push(11)
heap.pop();
heap.display()