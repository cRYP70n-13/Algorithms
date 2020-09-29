/*
 * @lc app=leetcode id=1103 lang=javascript
 *
 * [1103] Distribute Candies to People
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
	let res = new Array(num_people).fill(0);
	let i = 0;
	let candy = 1;
	while (candy < candies) {
		// This one is to return to the beginning when we attend the last element
		if (i === num_people) i = 0;
		res[i] = res[i] + candy;
		candies -= candy;
		candy++;
		i++;
	}
	if (candies > 0) {
		if (i === num_people) i = 0;
		res[i] = res[i] + candies;
	}
	return res;
};
// @lc code=end

