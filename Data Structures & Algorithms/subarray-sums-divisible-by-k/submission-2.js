class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {
        let count = 0

        for(let i = 0; i < nums.length ; i++) {
            let curSum = 0;
            for(let j = i ; j < nums.length; j++) {
            curSum += nums[j];
               if(curSum % k === 0) {
                count +=1
            }
            }
        }
        return count
    }
}
