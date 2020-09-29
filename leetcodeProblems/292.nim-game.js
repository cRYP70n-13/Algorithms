/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
	// this is an ez one we just need to know if the number %4 is true or false;
	return n % 4 !== 0;
};
// @lc code=end

