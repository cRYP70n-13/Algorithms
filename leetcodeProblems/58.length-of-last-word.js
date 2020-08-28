/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	let i = s.length - 1;
	while (i !== 0 && s[i] === ' ') i--;

	let count = 0;
	for (; i >= 0; i--) {
		if (s[i] !== ' ') count++;
    	else break;
	}
	return count;
};
// @lc code=end

console.log(lengthOfLastWord('a '))