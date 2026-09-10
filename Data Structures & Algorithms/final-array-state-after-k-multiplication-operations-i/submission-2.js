class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        let res = nums.slice();
        let n = res.length;
        let minHeap = new MinPriorityQueue()

        for (let i = 0; i < n; i++) {
            minHeap.enqueue(i);
        }

        for (let _ = 0; _ < k; _++) {
            let i = minHeap.dequeue();
            res[i] *= multiplier;
            minHeap.enqueue(i);
        }

        return res;
    }
}
