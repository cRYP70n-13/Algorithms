/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	let n = num;
};
// @lc code=end

let num = 1837;
while (num > 0) {
	console.log(num % 10);
	num = Math.floor(num / 10);
}
