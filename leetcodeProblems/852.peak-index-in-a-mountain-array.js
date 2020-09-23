/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
	// This is the binary search method
	let l = 0;
	let r = A.length - 1;

	while (l < r) {
		const mid = Math.floor((r + l) / 2);
		if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
			return mid;
		else if (A[mid] > A[mid - 1])
			l = mid;
		else
			r = mid;
	}
	// default
	return 0;
};
// @lc code=end
console.log(peakIndexInMountainArray([0, 1, 0]));