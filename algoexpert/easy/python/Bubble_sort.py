def bubble_sort(arr):
	for i in range(len(arr)):
		for j in range(i, len(arr)):
			if arr[i] > arr[j]:
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp

	return arr


print(bubble_sort([ 1, 2, 7, 3, 5, 4, 8]))
