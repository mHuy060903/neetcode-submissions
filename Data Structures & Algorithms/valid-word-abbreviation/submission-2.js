class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;

        while(i < word.length && j < abbr.length) {
            if(isNaN(abbr[j])) {
               if(word[i] !== abbr[j]) {
                return false
               }
               i++
               j++
            } else {
                     if(abbr[j] === '0') {
                return false;
            }
              let number = 0;

              while(j < abbr.length && !isNaN(abbr[j])) {
                number = number * 10 + Number(abbr[j])
                j++
              }
              i+= number
              
            }
        }

            return i === word.length &&
           j === abbr.length;
    }
}
