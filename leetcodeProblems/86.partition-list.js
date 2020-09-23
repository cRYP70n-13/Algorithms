/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	let p1 = head, before = new ListNode(), after = new ListNode();
	let ptr1 = before, ptr2 = after;
	while (p1) {
		if (p1.val < x) {
			before.next = p1;
			before = before.next;
		} else {
			after.next = p1;
			after = after.next;
		}
		p1 = p1.next;
	}
	// the end of the two lists
	if (before.next != null) before.next = null;
	if (after.next != null) after.next = null;

	before.next = ptr2.next;
	return ptr1.next;
};
// @lc code=end

