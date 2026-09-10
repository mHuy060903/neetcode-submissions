class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        const minPQ = new MinPriorityQueue()

        for(let n of nums) {
            minPQ.enqueue(n)
        }

        for(let i = 1; i <= k; i++) {
            minPQ.enqueue(minPQ.dequeue() * multiplier)
        }

        let arr = []
        while(minPQ.size()) {
            arr.push(minPQ.dequeue())
        }

        return arr
    }
}
