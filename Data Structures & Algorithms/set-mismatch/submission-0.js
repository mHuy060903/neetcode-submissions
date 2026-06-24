class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
      const n = nums.length;
    
      const trueTotal = n * (n + 1) / 2
      let count = 0;
      const result = []
      const s = new Set()
      for(let i = 0; i < n; i++) {
          if(s.has(nums[i])) {
            result.push(nums[i])
          } else {
         count += nums[i]
         s.add(nums[i])
          }
      } 

      return [result, trueTotal - count]
    }
}
