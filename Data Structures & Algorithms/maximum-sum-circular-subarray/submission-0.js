class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
          let total = 0;
        let curMax = 0, maxSum = nums[0];
        let curMin = 0, minSum = nums[0];

        for (const x of nums) {
            total += x;

            curMax = Math.max(curMax + x, x);
            maxSum = Math.max(maxSum, curMax);

            curMin = Math.min(curMin + x, x);
            minSum = Math.min(minSum, curMin);
        }

        // Toàn số âm: không được chọn rỗng
        if (maxSum < 0) return maxSum;

        return Math.max(maxSum, total - minSum);
    }
}
