# this is just a treet forward algorithm O(N^2)
def printNGE(arr):

    for i in range(0, len(arr), 1):
        next = -1
        for j in range(i+1, len(arr), 1):
            if arr[i] < arr[j]:
                next = arr[j]
                break

        print(str(arr[i]) + " -- " + str(next))

# Driver program to test above function
arr = [11,13,21,3]
printNGE(arr)


# We can ALso use a stack to solve this problem
def createStack():
    stack = []
    return stack

def isEmpty(stack):
    return len(stack) == 0

def push(stack, x):
    stack.append(x)

def pop(stack):
    if isEmpty(stack):
        print("Error : stack underflow")
    else:
        return stack.pop()

def printNGE(arr):
    s = createStack()
    element = 0
    next = 0

    push(s, arr[0])

    # iterate for rest of the elements
    for i in range(1, len(arr), 1):
        next = arr[i]

        if isEmpty(s) == False:

            # if stack is not empty, then pop an element from stack
            element = pop(s)

            while element < next :
                print(str(element)+ " -- " + str(next))
                if isEmpty(s) == True :
                    break
                element = pop(s)

            if  element > next:
                push(s, element)

        push(s, next)

    while isEmpty(s) == False:
            element = pop(s)
            next = -1
            print(str(element) + " -- " + str(next))

arr = [11, 13, 21, 3]
printNGE(arr)
