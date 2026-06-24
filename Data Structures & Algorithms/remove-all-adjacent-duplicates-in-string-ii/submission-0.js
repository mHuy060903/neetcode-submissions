class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        const stack = []

        for(const char of s) {
            if(stack.length && stack[stack.length - 1][0] === char) {
               stack[stack.length - 1][1]++
            } else {
                stack.push([char, 1])
            }

            if(stack[stack.length - 1][1] === k) {
                stack.pop()
            }
        }
        let result = ""
        for(let [char, count] of stack) {
           result+=char.repeat(count)
        }

        return result
    }
}
