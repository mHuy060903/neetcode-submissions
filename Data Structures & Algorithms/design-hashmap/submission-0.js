class MyHashMap {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const keyIndex = this.arr.findIndex(k => k[0] === key)
        if(keyIndex !== -1) {
            this.arr[keyIndex][1] = value
            return
        }
        this.arr.push([key, value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const keyIndex = this.arr.findIndex(k => k[0] === key)
        if(keyIndex !== -1) {
            return this.arr[keyIndex][1] 
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const keyIndex = this.arr.findIndex(k => k[0] === key)
        if (keyIndex !== -1) {
            this.arr.splice(keyIndex, 1);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
