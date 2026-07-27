class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head =null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(this.head === null|| index >= this.size) {
            return -1
        }
        let current = this.head, count = 0;
        while(current.next) {
            if(count === index) {
                break;
            }
            current = current.next;
            count++;
        }
        return current.data;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.head = new Node(val, this.head);
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new Node(val)
        if(this.head === null){
            this.head = node
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
    // Check for invalid cases
    if (this.head === null || index >= this.size || index < 0) {
        return false;
    }

    // Special case: removing head
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return true;
    }

    let current = this.head;
    let count = 0;
    let previousNode = null;

    // Traverse to the node to be removed
    while (current !== null && count < index) {
        previousNode = current;
        current = current.next;
        count++;
    }

    // Check if we found the node to remove
    if (current === null) {
        return false;
    }

    // Remove the node by updating the next pointer
    previousNode.next = current.next;
    this.size--;
    return true;
}
    /**
     * @return {number[]}
     */
    getValues() {
        if(this.head === null) {
            return [[]]
        }
        let array = [];
        let current = this.head; 
        while(current.next) {
            array.push(current.data);
            current = current.next;
        }
        array.push(current.data)
        return array;
    }
}
