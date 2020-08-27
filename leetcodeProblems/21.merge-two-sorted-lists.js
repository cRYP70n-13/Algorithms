/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function (l1, l2) {
	// Creating a dummy node to start with
	let finalList = new ListNode(-1);

	// this is the head of the new final list
	let head = finalList;
	
	while (l1 || l2) {
		if (!l2 || (l1 !== null && l1.val <= l2.val)) {
			finalList.next = l1;
			finalList = finalList.next;
			l1 = l1.next;
		} else {
			finalList.next = l2;
			finalList = finalList.next;
			l2 = l2.next;
		}
	}
	return head.next;
};
// @lc code=end

