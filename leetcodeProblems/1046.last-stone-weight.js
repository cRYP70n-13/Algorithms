/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
// var lastStoneWeight = function(stones) {
// 	while (stones.length > 1) {
// 		stones.sort((a, b) => b - a);
// 		let y = stones[0];
// 		let x = stones[1];

// 		if (x == y) {
// 			// this mean move to the index x and index y and replace it by 1
// 			stones.splice(stones.indexOf(x), 1);
// 			stones.splice(stones.indexOf(y), 1);
// 		} else {
// 			let position = stones.indexOf(y);
// 			stones.splice(stones.indexOf(x), 1);
// 			y -= x;
// 			stones.splice(position, 1);
// 			// and this one means move to the index position and insert the y value there
// 			stones.splice(position, 0, y);
// 		}
// 	}
// 	return stones;
// };
// @lc code=end

// We can also do it using Greedy way
var lastStoneWeight = function (stones) {
	if (!stones || stones.length == 0) return 0; //no last stone
	if (stones.length == 1) return stones[0]; //only last no need smash
	while (stones.length > 1) {
		stones.sort((a, b) => a - b);
		console.log(stones);
		let add = stones[stones.length - 1] - stones[stones.length - 2];
		stones.splice(-2, 2);
		console.log(stones);
		stones.push(add);
		console.log(stones);
	}
	return stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));