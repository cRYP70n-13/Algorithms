/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function (head) {
	if (!head || !head.next) return head;

	let fast = head,
		slow = head;
	while (fast.next && fast.next.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	let middle = slow.next;
	slow.next = null;
	return merge(sortList(head), sortList(middle));
}

const merge = (item1, item2) => {
	let d = new ListNode(-1); //dummy and temp
	let tmp = d;
	while (item1 && item2) {
		tmp.next = (item1.val < item2.val) ? item1 : item2;
		tmp = tmp.next;
		if (item1.val < item2.val) item1 = item1.next;
		else item2 = item2.next;
	}
	if (item1) tmp.next = item1;
	if (item2) tmp.next = item2;
	return d.next;
}
// @lc code=end