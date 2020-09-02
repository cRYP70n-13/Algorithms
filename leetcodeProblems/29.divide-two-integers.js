/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const retIsNegative = (divisor > 0) ^ (dividend > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let ret = 0;
  while (divisor <= dividend) {
    let value = divisor;
    let multiple = 1;
    while (value + value <= dividend) {
      value += value;
      multiple += multiple;
    }
    dividend = dividend - value;
    ret += multiple;
  }

  if (ret > 2 ** 31 - 1) {
    return retIsNegative ? -(2 ** 31) : 2 ** 31 - 1;
  }
  return retIsNegative ? -ret : ret;
};
// @lc code=end

