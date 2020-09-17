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
	for (let arr of A) {
		arr.reverse()
		for (let i = 0; i < arr.length; i++)
			arr[i] = arr[i] == 0 ? 1 : 0;
	}
	return A;
};
// @lc code=end