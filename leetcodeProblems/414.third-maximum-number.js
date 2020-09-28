/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
	nums.sort((a, b) => a - b);
	const newArr = [...new Set(nums)];
	if (newArr[newArr.length - 3] == undefined)
		return newArr[newArr.length - 1];
	else
		return newArr[newArr.length - 3];
};
// @lc code=end

console.log(thirdMax([3, 2, 1]));