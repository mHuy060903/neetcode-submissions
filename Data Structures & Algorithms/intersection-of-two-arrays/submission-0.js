class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const s = new Set()
        const s1 = new Set()
        for(let i = 0; i < nums1.length; i++) {
            s.add(nums1[i])
        }
        const result = []
        for(let i = 0; i < nums2.length; i++) {
            if(s.has(nums2[i]) && !s1.has(nums2[i])) {
                result.push(nums2[i])
                s1.add(nums2[i])
            }
        }

        return result
    }
}
