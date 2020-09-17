/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
	let incr = true;
	let dec = true;
	for (let i = 0; i < A.length; i++) {
		if (A[i] < A[i + 1])
			incr = false;
		else if (A[i] > A[i + 1])
			dec = false;
		else continue;
	}
	return incr || dec;
};
// @lc code=end

