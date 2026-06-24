class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const setAllowed = new Set()

        for(let char of allowed) {
          setAllowed.add(char)
        }
        let count = 0
        for(let i = 0; i < words.length; i++) {
            let isValid = true
          for(let char of words[i]) {
            if(!setAllowed.has(char)) {
                isValid = false
            }
          }
          if(isValid) {
            count+=1
          }
        }
        return count
    }
    
}
