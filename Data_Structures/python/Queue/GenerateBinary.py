def generatePrintBinary(n):

    # Create an empty queue
    from Queue import Queue
    q = Queue()

    q.put("1")

    while (n > 0):
        n -= 1
        # Print the front of queue
        s1 = q.get()
        print(s1)

        s2 = s1

        # Append "0" to s1 and enqueue it
        q.put(s1 + "0")

        q.put(s2 + "1")

n = 10
generatePrintBinary(n)
