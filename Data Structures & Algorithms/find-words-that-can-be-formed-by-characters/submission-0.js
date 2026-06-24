class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {

        // frequency của chars
        const charsFreq = new Map();

        for (const char of chars) {
            charsFreq.set(
                char,
                (charsFreq.get(char) || 0) + 1
            );
        }

        let total = 0;

        // check từng word
        for (const word of words) {

            const wordFreq = new Map();

            // count frequency của word
            for (const char of word) {
                wordFreq.set(
                    char,
                    (wordFreq.get(char) || 0) + 1
                );
            }

            let valid = true;

            // compare với chars
            for (const char of wordFreq.keys()) {

                if (
                    (charsFreq.get(char) || 0)
                    < wordFreq.get(char)
                ) {
                    valid = false;
                    break;
                }
            }

            // nếu build được
            if (valid) {
                total += word.length;
            }
        }

        return total;
    }
}
