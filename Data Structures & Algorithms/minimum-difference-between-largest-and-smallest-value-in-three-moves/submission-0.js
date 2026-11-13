class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minDifference(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        if (n <= 4) return 0;
        let best = Infinity;
        for (let i = 0; i < 4; i++)
            best = Math.min(best, nums[n - 4 + i] - nums[i]);
        return best;

    }
}
