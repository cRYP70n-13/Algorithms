/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	// My idea is to run two pointers and check 
	// if the headA.next.val === headB.next.val and we return the value
	// Else we return null;
	if (headA === null || headB === null)
		return null;

	let itA = headA;
	let itB = headB;
	while (itA !== itB) {
		itA = itA.next;
		itB = itB.next;
		if (itA === itB)
			return itA;
		if (!itA)
			itA = headB;
		if (!itB)
			itB = headA;
	}
	return itA;
};
// @lc code=end

