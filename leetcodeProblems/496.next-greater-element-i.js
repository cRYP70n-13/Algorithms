/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let res = [];
	for (let i of nums1) {
		let index = nums2.indexOf(i);
		while (index < nums2.length) {
			if (i < nums2[index])
				break;
			index++;
		}
		index === nums2.length ? res.push(-1) : res.push(nums2[index]);
	}
	return res;
};
// @lc code=end

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));