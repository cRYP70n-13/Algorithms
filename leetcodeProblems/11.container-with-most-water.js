/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let min = Math.min(height[i], height[j]);
			max = Math.max(max, min * (j - i));
		}
	}
	return max;
};


var maxArea = function (height) {
	let max = 0;
	let p1 = 0;
	let p2 = height.length - 1;
	while (p1 < p2) {
		let min = Math.min(height[p1], height[p2]);
		max = Math.max(max, min * (p2 - p1));
		if (height[p1] < height[p2])
			p1++;
		else
			p2--;
	}
	return max;
};
// @lc code=end