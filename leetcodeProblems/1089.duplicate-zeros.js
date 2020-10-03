/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			// Here we add zeros so we have to remove from the top
			arr.splice(i, 0, 0);
			// and here we are removing the top element
			console.log(arr.pop());
			i++;
		}
	}
	console.log(arr);
};
// @lc code=end

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);