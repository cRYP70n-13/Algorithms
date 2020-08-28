/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let l = 0;
	let r = Math.ceil(x / 2);
	let mid = 0;
	while (l <= r) {
		mid = Math.floor((l + r) / 2);
		if (mid * mid === x) return mid;
		else if (mid * mid > x)
			r = mid - 1;
		else
			l = mid + 1;
	}
	return r;
};
// @lc code=end

