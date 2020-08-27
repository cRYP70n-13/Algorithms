/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let arr = [];
	let res = 0;
	let str = String(x).split('');
	while (str.length)
		arr.push(str.pop());
	res = parseInt(arr.join(''));
	if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
    	return 0;
  	}
	return x < 0 ? -res : res;
};
// @lc code=end

console.log(reverse(-123));

