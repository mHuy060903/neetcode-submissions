class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

    const m = new Map();

    for (const num of nums) {
        m.set(num, (m.get(num) || 0) + 1);
    }

    const keys = [...m.keys()];

    keys.sort((a, b) => {
        return m.get(b) - m.get(a);
    });

    return keys.slice(0, k);
}
}
