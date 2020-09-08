/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	let res1 = 0;
	let res2 = 0;
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'U') {
			res1++;
		} else if (moves[i] === 'D') {
			res1--;
	    } else if (moves[i] === 'L') {
			res2++;
		} else if (moves[i] === 'R') {
			res2--;
		}
	}
	return (res1 == 0 && res2 == 0);
};
// @lc code=end

