class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = []
        let max = -1;
        for(let i = arr.length - 1; i >= 0; i--) {
            if(i === arr.length - 1) {
                result[i] = -1
            } else {
            max = Math.max(max, arr[i+1])
            result[i] = max
            }
        }
        return result
    }
}
