/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
	if (head == null) return null;

	let headEven = head.next;
	let even = headEven;
	let odd = head;

	while (even && even.next) {
	  odd.next = even.next;
	  odd = odd.next;
	  even.next = odd.next;
	  even = even.next;
	}

	odd.next = headEven;
	return head;
};
// @lc code=end
