/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	let n = nums.length - 1;
	let set = new Set(nums.sort());
	let res = [];
	// console.log(set)
	if (nums[n] === 1) return [2];
	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i))
			res.push(i);
	}
	return res;
};
// @lc code=end

console.log(findDisappearedNumbers([1, 1, 2, 2]))