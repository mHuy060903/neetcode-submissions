class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let cur = nums[0];   // tổng lớn nhất của subarray kết thúc tại vị trí hiện tại
        let best = nums[0];  // tổng lớn nhất toàn cục

        for (let i = 1; i < nums.length; i++) {
            cur = Math.max(nums[i], cur + nums[i]);
            best = Math.max(best, cur);
        }

        return best;
    }
}
    }
}
