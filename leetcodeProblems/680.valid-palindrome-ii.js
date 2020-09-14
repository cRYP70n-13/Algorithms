/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    const isPalindrome = (s, i, j) => {
    	while (i < j)
    		if (s.charAt(i++) !== s.charAt(j--))
    			return false;
    	return true;
    }

    while (i < j) {
    	if (s.charAt(i) !== s.charAt(j))
    		return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
		i++;
		j--;
    }

    return true;
};
// @lc code=end

