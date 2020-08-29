/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
	while (idx2 >= 0) {
		nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
	}
};
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));