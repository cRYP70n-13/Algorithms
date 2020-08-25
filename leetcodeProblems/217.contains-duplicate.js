/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const unique = new Set(nums);
    if (unique.size === nums.length) return false;
    return true; 
};
// @lc code=end

