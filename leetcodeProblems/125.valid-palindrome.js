/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  if (s.length < 2) return true;
  const letterRange = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0, j = letterRange.length - 1; i <= j; i++, j--)
    if (letterRange[i] != letterRange[j]) return false;
  return true;
}
// @lc code=end
