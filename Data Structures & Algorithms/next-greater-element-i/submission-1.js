class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const indexKey = new Map()
        const valueKey = new Map()
        for(let i = 0; i < nums2.length; i++) {
            indexKey.set(i, nums2[i])
            valueKey.set(nums2[i], i)
        }

        const result = []

        for(let i = 0; i < nums1.length; i++) {
            const index = valueKey.get(nums1[i]) + 1
            let has = false
           for(let j = index; j < nums2.length; j++) {
            if(indexKey.get(j) > nums1[i]) {
                result.push(indexKey.get(j))
                has = true
                break
            }
           }
           if(!has) {
             result.push(-1)
           }
        }
        return result
    }
}
