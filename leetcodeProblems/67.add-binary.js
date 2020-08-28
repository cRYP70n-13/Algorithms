/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	// Here i add '0b' to both numbers and convert it to strign giving the Base arg 2 val;
	return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
// @lc code=end

addBinary("11", "1");