/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	salary.sort((a, b) => a - b);
	let total = 0;
	for (let i = 1; i < salary.length - 1; i++)
		total += salary[i];
	return (total / (salary.length - 2));
};
// @lc code=end
console.log(average([4000, 3000, 1000, 2000]));