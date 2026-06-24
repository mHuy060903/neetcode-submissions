class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let i = 0;
        let j = nums.length - 1

        while(i <= j) {
            let m = i+Math.floor((j-i)/2);
             
            const curVal = nums[m]

            if((m === 0 || curVal > nums[m - 1]) && 
            (m + 1 === nums.length || curVal > nums[m + 1])) {
                return m
            }

            if(curVal < nums[m - 1]) {
                j = m - 1
            } else {
                i = m + 1
            }
            
        }
        return -1
    }
}
