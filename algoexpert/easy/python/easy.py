def twoNumSum(nums, target):
	nums.sort()
	left = 0
	right = len(nums) - 1
	while left < right:
		currentSum = nums[left] + nums[right]
		if currentSum == target:
			return [nums[left], nums[right]]
		elif currentSum > target:
			right -= 1
		elif currentSum < target:
			left += 1
	return []


def binary_search(arr, target):
	low = 0
	high = len(arr)
	while low < high:
		mid = (low + high) // 2
		if arr[mid] == target:
			return mid
		elif arr[mid] > target:
			high = mid - 1
		elif arr[mid] < target:
			low = mid
	return - 1


def bubble_sort(arr):
	for i in range(len(arr)):
		for j in range(i, len(arr)):
			if arr[i] < arr[j]:
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
	return arr


def find_three_largest_elements(arr):
	threeLargestNum = [None, None, None]
	for i in arr:
		_findLargest(threeLargestNum, i)
	return threeLargestNum


def _findLargest(threeLargestNum, num):
	if threeLargestNum[2] is None or num > threeLargestNum[2]:
		shiftAndUpdate(threeLargestNum, 2, num)
	elif threeLargestNum[1] is None or num > threeLargestNum[1]:
		shiftAndUpdate(threeLargestNum, 1, num)
	elif threeLargestNum[0] is None or num > threeLargestNum[0]:
		shiftAndUpdate(threeLargestNum, 0, num)


def shiftAndUpdate(arr, index, num):
	for i in range(index + 1):
		if i == index:
			arr[i] = num
		else:
			arr[i] = arr[i + 1]


def Nth_fibonacci_number(n):
	if n == 1:
		return 0
	elif n == 2:
		return 1
	return Nth_fibonacci_number(n - 1) + Nth_fibonacci_number(n - 2)


def validate_subsequence(arr, subsequence):
	j = 0
	for i in range(len(arr)):
		if arr[i] == subsequence[j]:
			j += 1
	return j == len(subsequence)


def Node_Depth(root, depth = 0):
	if root is None:
		return
	return depth + Node_Depth(root.left, depth + 1) + Node_Depth(root.right, depth + 1)


def inserttion_sort(array):
    for i in range(1, len(array)):
        j = i
        while j > 0 and array[j] < array[j - 1]:
            swap(j, j - 1, array)
            j -= 1
        return array


def swap(i, j, array):
	array[i], array[j] = array[j], array[i]


def selection_sort(array):
    current_index = 0
    while current_index < len(array) - 1:
        smallest_index = current_index
        for i in range(current_index + 1, len(array)):
            if array[i] < array[smallest_index]:
                smallest_index = i
        swap(current_index, smallest_index, array)
        current_index += 1
    return array


def palindrome_check(str):
	left = 0
	right = len(str)
	while left < right:
		if str[left] != str[right]:
			return False
	return True


def product_sum(arr, coef=1):
	sum = 0
	for elem in arr:
		if type(elem) is list:
			product_sum(elem, coef + 1)
		else:
			sum += elem
	return sum * coef


def caesarCipherEncryptor(string, key):
    new_letters = []
    new_key = key % 26
    for letter in string:
        new_letters.append(get_new_letter(letter, new_key))
    return "".join(new_letters)


def get_new_letter(letter, key):
    newLetterCode = ord(letter) + key
    return chr(newLetterCode) if newLetterCode <= 122 else chr(96 + newLetterCode % 122)


class Node:
	def __init__(self, value):
		self.value = value
		self.left = None
		self.right = None
	

def branch_sum(root):
	sums = []
	_calculateBranchSum(root, 0, sums)
	return sums


def _calculateBranchSum(node, runningSum, sums):
	if node is None:
		return
	newRunningSum = runningSum + node.value
	if node.left is None and node.right is None:
		sums.append(newRunningSum)
		return
	return _calculateBranchSum(node.left, newRunningSum, sums)
	return _calculateBranchSum(node.right, newRunningSum, sums)


# here we have also the depth first search
class Node:
	def __init__(self, name):
		self.children = []
		self.name = name

	def addChild(self, child):
		self.chilren.append(child)
		return self
	
	def depthFirstSearch(self, array):
		array.append(self.name)
		for child in children:
			child.depthFirstSearch(array)
		return array



print(validate_subsequence([1, 10, 19, 24, 29, 12, 90], [1, 29, 90]))
