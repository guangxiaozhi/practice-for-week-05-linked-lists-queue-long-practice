// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        // Method 0(1)
        return this.length

        // Method 0(n)
        // let counter = 0
        // let node = this.head
        // while (node) {
        //     counter++
        //     node = node.next
        // }
        // return counter

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let sum = 0
        let node = this.head
        while (node) {
            sum += node.value
            node = node.next
        }
        return sum


        // Time Complexity 0(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength()

        // Time Complexity 0(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (this.length < n) {
            return null
        }
        let count = 0
        let node = this.head
        while (count < n) {
            node = node.next
            count++
        }
        return node

        // Time Complexity 0(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let mid
        if (this.length % 2 === 0) {
            mid = (this.length / 2) - 1
        } else {
            mid = (this.length - 1) / 2
        }
        return this.findNthNode(mid)

        // Time Complexity 0(N)
        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Does the time complexity change? How about space complexity?

        // Your code here
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }
        const newList = new SinglyLinkedList()
        while (arr.length > 0) {
            newList.addToTail(arr.pop())
        }
        return newList

        // Time omplexity 0(N)

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place

        // Your code here
        let prev = null
        let second = null
        let current = this.head
        while (current !== null) {
            second = current.next
            current.next = prev
            prev = current
            current = second
            this.head = current
            console.log(`second: ${second.value}`)
            console.log(`prev: ${prev.value}`)
            console.log(`current: ${current.value}`)
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
