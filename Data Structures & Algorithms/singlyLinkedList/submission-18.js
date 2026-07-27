class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index >= this.size || index < 0) {
            return -1;
        }
        let current = this.head;
        let ind = 0;
        while(ind !== index) {
            current = current.next;
            ind++;
        }
        return current.data
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
        const node = new Node(val);
    if (!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        let previous = null;
        let ind = 0;
        while(ind < index) {
            previous = current;
            current = current.next;
            ind++;
        }
        previous.next = current.next;
        this.size--;
        return true;
       
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}
