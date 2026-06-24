class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        let i = 0;
        let j = 0;
       
        const result = []
        while(i < chars.length && j < chars.length) {
           
           result.push(chars[i])
           while(chars[i] === chars[j]) {
            j++
           }

           const count = j - i;

        if (count > 1) {
            result.push(...count.toString());
        }

        i = j;
        }

         for (let k = 0; k < result.length; k++) {
        chars[k] = result[k];
    }

    return result.length;
    }
}
