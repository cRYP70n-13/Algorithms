/*
 * @lc app=leetcode id=1328 lang=javascript
 *
 * [1328] Break a Palindrome
 */

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
	if (palindrome.length < 2) return "";
	palindrome = palindrome.split('');
	let len = palindrome.length;

	for (let i = 0; i < len; i++) {
		if (palindrome[i] != 'a' && i !== (len - 1) / 2) {
			palindrome[i] = 'a';
			return palindrome.join('');
		}
	}
	palindrome[len - 1] = 'b';
	return palindrome.join('');
};
// @lc code=end

