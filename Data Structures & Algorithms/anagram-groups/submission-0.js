class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const m = new Map()

      for(let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('')

        if(m.get(key)) {
            const arr = m.get(key)
            arr.push(strs[i])
           m.set(key, arr)
        } else {
            m.set(key, [strs[i]])
        }
      }
     
     return [...m.values()]
       
    }
}
