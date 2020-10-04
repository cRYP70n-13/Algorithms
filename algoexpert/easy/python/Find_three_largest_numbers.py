# This is an O(nlogn) algorithms
# O(nlogn) time | O(1) space
def FindThreeLargestNums(arr):
	arr.sort()
	return [arr[len(arr) - 1], arr[len(arr) - 2], arr[len(arr) - 3]]


# Here we can do better using my first idea
def findThreeLargestNums(arr):
	threeLargestNums = [None, None, None]
	for num in arr:
		_updateLargestNums(threeLargestNums, num)
	return threeLargestNums


def _updateLargestNums(threeLargest, num):
	if threeLargest[2] is None or num > threeLargest[2]:
		shiftAndUpdate(threeLargest, num, 2)
	elif threeLargest[1] is None or num > threeLargest[1]:
		shiftAndUpdate(threeLargest, num, 1)
	elif threeLargest[0] is None or num > threeLargest[0]:
		shiftAndUpdate(threeLargest, num, 0)

def shiftAndUpdate(arr, num, index):
	for i in range(index + 1):
		if i == index:
			arr[i] = num
		else:
			arr[i] = arr[i + 1]

# we can also here us a stack and three variables and keep track of the max of them one by one
print(findThreeLargestNums([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
