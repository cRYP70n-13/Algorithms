/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
	if (num === 0) return '0';
	const sign = num < 0 ? '-' : '+';
	num = Math.abs(num);
	let res = '';
	while (num) {
		res = num % 7 + res;
		num = Math.floor(num / 7);
	}
	return sign === '+' ? res : '-' + res;
};

// @lc code=end