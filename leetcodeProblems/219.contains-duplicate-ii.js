/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let m = new Map();
    for (i = 0; i < nums.length; i++) {
      if (!m.has(nums[i])) m.set(nums[i], i);
      else {
        if (i - m.get(nums[i]) <= k) return true;
        else m.set(nums[i], i);
      }
    }
    return false; 
};
// @lc code=end

