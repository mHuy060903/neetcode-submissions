class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        nums.sort((a,b)=>a-b);
        const MOD = 1000000007;
        const n = nums.length

        const arr = new Array(n).fill(1)

        for(let i = 1; i < arr.length; i++) {
            arr[i] = (arr[i-1] * 2) % MOD;
        }

         let l = 0;
    let r = n - 1;
    let ans = 0;

    while(l <= r) {

        if(nums[l] + nums[r] <= target) {

            ans =
              (ans + arr[r-l]) % MOD;

            l++;
        }
        else {
            r--;
        }
    }

    return ans;
    }
}
