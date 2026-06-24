class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
      const m = new Map()

      for(let i = 0; i < arr.length; i++) {
        if(m.has(arr[i])) {
          m.set(arr[i], false)
        } else {
          m.set(arr[i], true)
        }
      }
      let n = k

      for(let i = 0; i < arr.length; i++) {
        if(m.get(arr[i])) {
          n--
        }
        if(n === 0) {
          return arr[i]
          break;
        }
      }
      return ""
    }
}
