class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const stackLeft = []
        const stackStar = []

        for(let char of s) {
            if(char === '(') {
                stackLeft.push(')')
            } else if (char === '*') {
                stackStar.push('*')
            } else {
                if(stackLeft.length > 0) {
                    stackLeft.pop()
                } else if (stackStar.length > 0) {
                    stackStar.pop()
                } else {
                    return false
                }
            }
        }

        return stackStar.length >= stackLeft.length ? true : false
    }
}
