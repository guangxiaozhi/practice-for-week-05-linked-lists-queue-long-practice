// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        let node = new DoublyLinkedNode(val);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        let remove = this.head.value;
        if (this.length === 1){
            this.head = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        // console.log("remove: ", remove)
        this.length--;
        return remove;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if (this.length === 0){
            return undefined;
        }
        let remove = this.tail.value;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return remove;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return remove;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here
        if (this.length === 0){
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here
        if (this.length === 0){
            return undefined;
        }
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
