class DynamicArray {
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    resize() {
        this.capacity *= 2;
        let newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    get(i) {
        return this.arr[i];
    }

    set(i, n) {
        this.arr[i] = n;
    }

    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.arr[this.size++] = n;
    }

    popback() {
        return this.arr[--this.size];
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}
