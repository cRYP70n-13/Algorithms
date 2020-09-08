/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let sum1 = 0;
	for (let i = 0; i < s.length; i++) {
		sum1 += s[i].charCodeAt();
	}

	let sum2 = 0;
	for (let i = 0; i < t.length; i++) {
		sum2 += t[i].charCodeAt();
	}

	return String.fromCharCode(sum2 - sum1);
};
// @lc code=end
