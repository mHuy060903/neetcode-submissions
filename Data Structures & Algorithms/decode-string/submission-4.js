class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = []

        for(let char of s) {
            if(char !== ']') {
                stack.push(char)
            } else {
                let text = ''
                while(stack[stack.length - 1] !== '[') {
                    text = stack.pop() + text
                }
                stack.pop()
                let num = '';

            while(
                stack.length &&
                !isNaN(stack[stack.length - 1])
            ) {
                num = stack.pop() + num;
            }
            const count = Number(num);

                let result = ""

                for(let i = 1; i <= count; i++) {
                    result += text
                }
                stack.push(result)
            }
        }

        return stack.join('')
    }
}
