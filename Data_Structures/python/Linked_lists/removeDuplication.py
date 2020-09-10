class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head is None or head.next is None: return head

        fp, sp = head, head.next

        while sp is not None:
            if fp.val == sp.val:
                fp.next = fp.next.next
            else:
                fp = fp.next
            sp = sp.next
        return head
