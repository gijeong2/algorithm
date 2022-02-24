

class Graph {
    constructor() {
        this.adjancenyList = {}
    }

    addVertex(vertex) {
        if (!this.adjancenyList[vertex]) {
            this.adjancenyList[vertex] = []
        }
        else {
            console.log('Graph already has vertex.')
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjancenyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjancenyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjancenyList[vertex1].push(vertex2)
        this.adjancenyList[vertex2].push(vertex1)
    }
    removeVertext(vertex) {
        delete this.adjancenyList[vertex]
    }
    removeEdge(vertex1, vertex2) {
        this.adjancenyList[vertex1] = this.adjancenyList[vertex1].filter(vertex => vertex != vertex2)
        this.adjancenyList[vertex2] = this.adjancenyList[vertex2].filter(vertex => vertex != vertex1)
    }
    display(){
        console.log(this.adjancenyList)
    }
}

const graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');

graph.addEdge('c','a');
graph.display()