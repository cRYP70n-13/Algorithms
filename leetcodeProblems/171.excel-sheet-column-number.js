/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
	const n = s.length - 1;
	let number = 0;

	for (let i = 0; i <= n; i++) {
		const pw = Math.pow(26, i);
		const num = s.charCodeAt(n - i) - 64;

		number += pw * num;
	}

	return number;
};
// @lc code=end