/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	let res = [];
	for (let i = 0; i < numRows; i++) {
		res[i] = [];
		res[i][0] = res[i][i] = 1;

		for (let j = 1; j < i; j++)
			res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
	}
	return res;
};
// @lc code=end

console.log(generate(5));