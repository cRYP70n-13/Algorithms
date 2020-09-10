def skipMdeleteN(head, M, N):
    # Code here
    temp = head
    prev = temp

    count_m = 0
    count_n = 0
    while temp is not None :

        if count_m < M:
            prev = temp
            temp = temp.next
            count_m += 1

        elif count_m == M and count_n < N:
            prev.next = temp.next
            temp = temp.next
            count_n += 1
        else :
            count_m = 0
            count_n = 0

class Node:
    # Constructor to initialize the node object
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    # Function to initialize head
    def __init__(self):
        self.head = None

    # Function to insert a new node at the beginning
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # Utility function to prit the linked LinkedList
    def printList(self):
        temp = self.head
        while (temp):
            print(temp.data, end=" ")
            temp = temp.next
        print("")


if __name__=='__main__':

    t = int(input())

    while (t > 0):
        llist = LinkedList()
        n = int(input())
        m, p = list(map(int, input().strip().split()))
        values = input().strip().split()

        for i in reversed(values):
            llist.push(i)
        skipMdeleteN(llist.head, m, p)

        llist.printList()
        t -= 1
