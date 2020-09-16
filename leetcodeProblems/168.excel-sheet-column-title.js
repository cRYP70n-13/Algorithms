/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	let x;
	let res = '';
	while (n) {
		x = (n - 1) % 26;
		n = (n - 1 - x) / 26;
		res = String.fromCharCode(65 + x) + res;
	}
	return res;
};
// @lc code=end

console.log(convertToTitle(701));