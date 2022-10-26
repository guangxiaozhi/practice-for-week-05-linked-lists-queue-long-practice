const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here
        let node = new SinglyLinkedNode(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this.length

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here
        if (this.length === 0) {
            return null
        }
        let remove = this.head.value
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return remove
        }
        this.head = this.head.next
        this.length--
        return remove

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
