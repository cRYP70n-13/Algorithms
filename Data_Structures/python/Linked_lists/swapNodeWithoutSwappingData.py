class Node :

    # constructor
    def __init__(self, val = None, next1 = None):
        self.data = val
        self.next = next1

    # print list from this
    # to last till None
    def printList(self):

        node = self
        while (node != None) :
            print(node.data, end = " ")
            node = node.next
        print(" ")

def push(head_ref, new_data) :

    (head_ref) = Node(new_data, head_ref)
    return head_ref

def swapNodes(head_ref, x, y) :
    head = head_ref

    # Nothing to do if x and y are same
    if (x == y) :
        return None

    a = None
    b = None

    # search for x and y in the linked list
    # and store therir pointer in a and b
    while (head_ref.next != None) :

        if ((head_ref.next).data == x) :
            a = head_ref

        elif ((head_ref.next).data == y) :
            b = head_ref

        head_ref = ((head_ref).next)


    # if we have found both a and b
    # in the linked list swap current
    # pointer and next pointer of these
    if (a != None and b != None) :
        temp = a.next
        a.next = b.next
        b.next = temp
        temp = a.next.next
        a.next.next = b.next.next
        b.next.next = temp

    return head

# Driver code

start = None

# The constructed linked list is:
# 1.2.3.4.5.6.7
start = push(start, 7)
start = push(start, 6)
start = push(start, 5)
start = push(start, 4)
start = push(start, 3)
start = push(start, 2)
start = push(start, 1)

print("Linked list before calling swapNodes() ")
start.printList()

start=swapNodes(start, 6, 3)

print("Linked list after calling swapNodes() ")
start.printList()
