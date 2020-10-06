# this is a very easy problem when we have just to sort the array
# and return the arr[K - 1] element
def kth_smallest(arr, k):
	arr.sort()

	return arr[k - 1]