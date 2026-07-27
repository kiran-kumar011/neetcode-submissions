class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.array = Array(capacity).fill(0);
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
        // this.size++;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity) {
            this.resize();
        }
        // const newArr = this.array.slice(n, 1);
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const temp = this.array[this.size-1];
        this.array[this.size-1] = null;
        this.size--;
        return temp;
    }

    /**
     * @returns {void}
     */
    resize() {
        const newArr = Array(this.capacity).fill(null);
        this.array = [...this.array, ...newArr];
        this.capacity = this.capacity ? this.capacity * 2 : 1
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
