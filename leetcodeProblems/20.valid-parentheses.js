/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const openMap = new Map([
		['(', ')'],
		['[', ']'],
		['{', '}'],
	]);
	const closeMap = new Map([
		[')', '('],
		[']', '['],
		['}', '{'],
	]);
	for (let i = 0; i < s.length; i++) {
		if (openMap.get(s[i])) {
			stack.push(s[i]);
		} else {
			const item = stack.pop();
			if (item !== closeMap.get(s[i]))
				return false;
		}
	}
	return stack.length === 0;
};
// @lc code=end

console.log(isValid('[{}]'));