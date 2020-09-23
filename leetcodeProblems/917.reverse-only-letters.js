/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
	// I solved it by using the reg exp
	let i = 0;
	let str = S.split('');
	let j = S.length - 1;
	let reg = /[a-zA-Z]/;

	while (i < j) {
		if (!reg.test(str[i])) {
			i++;
		} else if (!reg.test(str[j])) {
			j--;
		} else {
			let tmp = str[i];
			str[i] = str[j];
			str[j] = tmp;
			i++;
			j--;
		}
	}
	return str.join('');
};
// @lc code=end

