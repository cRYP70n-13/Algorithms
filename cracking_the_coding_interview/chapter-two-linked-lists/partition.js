// This is the partition problem to be honest I didn't understand this problem but I will give it a shot
// OKAY I DID IT this is my solution
const partition = function(head, x) {
    let before = new ListNode(), after = new ListNode();
    let p1 = head, res = before, midPoint = after;

    //partition list into 2 parts, one < and one >= numbers than x
    while (p1) {
        if (p1.val < x) {
            before.next = p1;
            before = before.next;
        }
        else {
            after.next = p1;
            after = after.next;
        }
        p1 = p1.next;
    }
    if (before.next != null) before.next = null;
    if (after.next != null) after.next = null;

    //join the 2 lists appropriately
    before.next = midPoint.next;

    return res.next;
};
