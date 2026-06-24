class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const m = new Map()
     
        
    for (const num of nums) {
        m.set(num, (m.get(num) || 0) + 1);
    }

    const result = [];

    for (const [num, freq] of m) {
        if (freq > nums.length / 3) {
            result.push(num);
        }
    }
        return result
    }
}
