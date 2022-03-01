class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (currentNode.value == value) return
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    find(value) {
        if (!this.root) {
            console.log('no value')
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            console.log(currentNode.value, value)
            if (currentNode.value == value) {
                console.log('find value: ', value);
                return
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else currentNode = currentNode.right;
        }
        if(!currentNode){
            console.log('no value: ', value)
            return false
        }
    }
}

const tree = new Tree();
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(2);
tree.find(2);
tree.find(4);