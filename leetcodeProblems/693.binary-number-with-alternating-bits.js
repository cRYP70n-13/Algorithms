/*
 * @lc app=leetcode id=693 lang=javascript
 *
 * [693] Binary Number with Alternating Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
	let num = n.toString(2);
	for (let i = 0; i < num.length; i++)
		if (num[i] == num[i + 1])
			return false;
	return true;
};
// @lc code=end