class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
     getRow(rowIndex) {

        const result = [[1]];

        for (let i = 1; i <= rowIndex; i++) {

            const temp = [];

            for (let j = 0; j <= i; j++) {

                if (j === 0 || j === i) {

                    temp.push(1);

                } else {

                    temp.push(
                        result[i - 1][j - 1] +
                        result[i - 1][j]
                    );
                }
            }

            result.push(temp);
        }

        return result[rowIndex];
    }
}
