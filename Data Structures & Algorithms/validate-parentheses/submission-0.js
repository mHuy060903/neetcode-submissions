class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const arr = ['(', '[', '{']

        for(let char of s) {
            if(arr.includes(char)) {
                stack.push(char)
            } else {
                const t = stack.pop()
                if(char === '}' && t !== '{') {
                    return false
                } else if(char === ')' && t !== '(') {
                    return false
                } else if(char === ']' && t !== '[') {
                    return false
                }
            }


        }

        return stack.length === 0 ? true : false
    }
}
