class MyStack {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.arr.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        const n = this.arr.pop()
        return n
    }

    /**
     * @return {number}
     */
    top() {
        const n = this.arr.length
        return this.arr[n-1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.arr.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
