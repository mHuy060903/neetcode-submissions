class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) {
            return 0
        }

        const s = new Set()

        for(let num of nums) {
            s.add(num)
        }

        let max = 1

        for(let i = 0; i < nums.length; i++) {
            if(!s.has(nums[i] - 1)) {
                let count = 1
                let a = nums[i] + 1
                while(s.has(a)) {
                    count+=1
                    a+=1
                }
                max = Math.max(max, count)
            }
        }

        return max
    }
}
