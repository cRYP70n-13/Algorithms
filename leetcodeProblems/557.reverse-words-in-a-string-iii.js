/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let res = s.split(' ');
	for (let i = 0; i < res.length; i++)
		res[i] = res[i].split('').reverse().join('');
	return res.join(' ');
};
// @lc code=end

console.log(reverseWords('otmane kimdil okay'))