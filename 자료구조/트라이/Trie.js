class Node {
    constructor(value) {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node('');
    }
    insert(string) {
        let currentNode = this.root;
        for (const str of string) {
            if (!currentNode.children.has(str)) {
                currentNode.children.set(str, new Node(currentNode.value + str))
            }
            currentNode = currentNode.children.get(str)
        }
    }
    find(string){
        let currentNode = this.root;
        for(const str of string){
            if(!currentNode.children.has(str)){
                console.log(`can't find ${string}`)
                return false;
            }
            currentNode = currentNode.children.get(str)
        }
        console.log(`Find ${string}!`)
    }
}

const trie = new Trie();
trie.insert('dog');
trie.insert('cat');
trie.insert('can');
trie.find('mom');
trie.find('can');