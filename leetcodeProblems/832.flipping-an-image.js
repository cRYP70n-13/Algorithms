/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
	for (let a of A) {
		a.reverse();
		for (let i = 0; i < a.length; i++)
			a[i] = a[i] === 1 ? 0 : 1;
	}
	return A;
}

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));