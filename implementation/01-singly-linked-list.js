// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const node = new SinglyLinkedNode(val)
        this.length++
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        return this

        // Complexity 0(1)
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this

        // Time Complexity 0(n)
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined
        }
        let oldHead = this.head
        this.head = this.head.next
        this.length--
        return oldHead

        // Your code here

        // Time Complexity 0(1)
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {
            return undefined
        }
        let current = this.head
        if (this.length === 1) {
            this.length--
            let node = this.head
            this.head = null
            return node
        }
        while (current.next.next) {
            current = current.next
        }
        let tail = current.next
        current.next = null
        this.length--
        return tail

        // Time Complexity 0(n)
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        if (this.length !== 0) {
            return this.head.value
        }
        return undefined

        // Time Complexity 0(1)
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (this.length !== 0) {
            let current = this.head
            while (current) {
                console.log(current.value)
                current = current.next
            }
        }

        // Time complexity 0(N)
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
