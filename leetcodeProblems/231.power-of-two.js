/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n == 1) return true;
	let i = 1;
	while (i < n)
		i *= 2;
	return i === n;
};
// @lc code=end

