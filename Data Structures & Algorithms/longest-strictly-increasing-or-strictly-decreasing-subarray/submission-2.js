class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let inCount = 1;
        let desCount = 1
        let max = 1

        for(let i = 0; i < nums.length - 1; i++) {
             if(nums[i] > nums[i+1]) {
                desCount++
                inCount = 1
             } else if(nums[i+1] > nums[i]) {
                inCount++
                desCount = 1
             } else {
                inCount = 1
                desCount = 1
             }

             max = Math.max(max, inCount, desCount)
           
        }
        return max
    }
}
