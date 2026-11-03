class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minSwaps(nums) {
        let one = 0
         const n = nums.length;
        for(let n of nums) {
            if(n === 1) {
                one++
            }
        }

        if(one === 0) {
            return 0
        }

        let cur = 0

        for(let i = 0;i < one; i++) {
            if(nums[i] === 0) {
                cur+=1
            }
        }
        let min = cur
        for(let l = 1; l < nums.length * 2; l++) {
          const out = nums[l - 1];              // phần tử rời cửa sổ
            const inn = nums[(l + one - 1) % n];  // phần tử vào cửa sổ

            if (out === 0) cur--;   // 0 rời đi → bớt 1 số 0
            if (inn === 0) cur++;   // 0 đi vào → thêm 1 số 0
 min = Math.min(min, cur);
        }

        return min
    }
}
