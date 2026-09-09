class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const maxPQ = new MaxPriorityQueue()

        for(let g of gifts) {
            maxPQ.enqueue(g)
        }

        for(let i = 1; i <= k; i++) {
            const n = Math.floor(Math.sqrt(maxPQ.dequeue()))
            maxPQ.enqueue(n)
        }
        let total = 0
        while(maxPQ.size()) {
           total += maxPQ.dequeue()
        }

        return count
    }
}
