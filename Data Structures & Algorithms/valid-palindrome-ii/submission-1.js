class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
      const isPalindrome = (left, right) => {

        while(left < right) {

            if(s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    let i = 0;
    let j = s.length - 1;

    while(i < j) {

        if(s[i] !== s[j]) {

            return (
                isPalindrome(i + 1, j) ||
                isPalindrome(i, j - 1)
            );
        }

        i++;
        j--;
    }

    return true;
    }
}
