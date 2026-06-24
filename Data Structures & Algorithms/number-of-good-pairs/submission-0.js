class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const n = nums.length
        const m = new Map()
        for(let i = 0; i < n; i++) {
            m.set(nums[i], (m.get(nums[i]) || 0) + 1)
        }
        let count = 0
        for(let k of m.keys()) {
            if(m.get(k) > 1) {
                const c = m.get(k) - 1
                count += c * (c + 1) / 2
            }
        }
        return count
    }
}
