/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let res = new ListNode(0);
	let head = res;
	let sum = 0;
	let carry = 0;
	while (l1 || l2 || sum > 0) {
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}
		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}
		head.next = new ListNode(sum);
		head = head.next;
		sum = carry;
		carry = 0;
	}
	return res.next;
};
// @lc code=end
