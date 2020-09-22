/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
	let n = A[0].length;
	let res = [];

	for (let i = 0; i < n; i++) {
		let letter = A[0][i];
		if (A.every(word => word.indexOf(letter) !== -1)) {
			// Push the founded results to our final array
			res.push(letter);
			// Remove the matched ones
			A = A.map(word => word.replace(letter, ''));

			i--;
		}
	}
	return res;
};
// @lc code=end

