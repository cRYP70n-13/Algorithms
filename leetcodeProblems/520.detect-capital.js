/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	let str = word.split('');
	if (word === word.toUpperCase()) return true;
	else if (word === word.toLowerCase()) return true;

	// the last case if the first one is upper and all the others are lower
	if (str[0].toUpperCase() && str.slice(1).every((elem) => elem === elem.toLowerCase()))
		return true;
	return false;
};
// @lc code=end

console.log(detectCapitalUse('Leetcode'));