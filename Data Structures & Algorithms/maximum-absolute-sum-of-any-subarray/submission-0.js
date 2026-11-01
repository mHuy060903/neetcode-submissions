class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAbsoluteSum(nums) {
         let curMax = 0, curMin = 0;
        let best = 0;

        for (const x of nums) {
            curMax = Math.max(0, curMax + x);
            curMin = Math.min(0, curMin + x);
            best = Math.max(best, curMax, -curMin);
        }

        return best;
    }
}
