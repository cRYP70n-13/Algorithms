/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let nums = n;
	while (nums != 1 && nums != 7) {
		let arr = nums.toString().split('');
		let sum = 0;

		for (let i = 0; i < arr.length; i++)
			sum += Math.pow(arr[i], 2);
		nums = sum;
		if (nums < 10 && nums != 1 && nums != 7)
			return false;
	}
	return true;
};
// @lc code=end
console.log(isHappy(7));