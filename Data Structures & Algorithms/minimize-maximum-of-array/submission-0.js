class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minimizeArrayValue(nums) {
          let prefix = 0;
        let result = 0;

        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i];
            result = Math.max(result, Math.ceil(prefix / (i + 1)));
        }

        return result;
    }
}
