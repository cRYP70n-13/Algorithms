/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	// We can also use the iteration root in mathematic
	return 1 + (num - 1) % 9;
};
// @lc code=end
