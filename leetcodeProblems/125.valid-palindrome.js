/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	// My idea is to traverse the string with two pointers 
	// If we found them the same return true else false
	// NOTE: -> I have to escape the non alpha characters
	// check just the range [a-zA-Z];
	let p1 = s[0];
	let p2 = s[s.length -1];
};
// @lc code=end

isPalindrome("A man, a plan, a canal: Panama");