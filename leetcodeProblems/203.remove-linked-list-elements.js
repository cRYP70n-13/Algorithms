/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let dommy = new ListNode(-1);
	dommy.next = head;
	head = dommy;
	while (dommy.next) {
		if (dommy.next.val === val)
			dommy.next = dommy.next.next;
		else
			dommy = dommy.next;
	}
	return head.next;
};
// @lc code=end

