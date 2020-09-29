/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const set = new Set();
    let count = 0;

    for (const c of s) {
    	if (set.has(c)) {
    		count += 2;
    		set.delete(c);
    	} else {
    		set.add(c);
    	}
    }

    return count + (set.size > 0 ? 1 : 0);
};
// @lc code=end

console.log(longestPalindrome("abccccdd"));