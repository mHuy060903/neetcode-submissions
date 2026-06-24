class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {

        let result = ""

        for(let i = 0; i < num.length - 2; i++) {
           if(num[i] === num[i+1] && num[i+1] === num[i+2]) {
            result = result ? Math.max(result, Number(num[i] + num[i] + num[i])) : Number(num[i] + num[i] + num[i])
           }
        }

        return result !== "" ? result === 0 ? "000" : result.toString() : ""
    }
}
