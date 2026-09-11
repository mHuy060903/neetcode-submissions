class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxPQ = new MaxPriorityQueue()

        for(let n of nums) {
            maxPQ.enqueue(n)
        }

        const m = k - 1
        while(m > 0) {
            maxPQ.dequeue()
        }

        return maxPQ[0]
    }
}
