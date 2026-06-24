class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    rearrangeArray(nums) {
        const positive = []
        const negative = []

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < 0) {
                negative.push(nums[i])
            } else {
                positive.push(nums[i])
            }
        }

      
        const result = []
       
         for(let i = 0; i < positive.length; i++) {
        result.push(positive[i]);
        result.push(negative[i]);
    }


        return result
    }
}
