def selectionSort(arr):
    for i in range(len(arr)):
        min_indx = i
        for j in range(i + 1, len(arr)):
            if arr[min_indx] > arr[j]:
                min_indx = j

        arr[i], arr[min_indx] = arr[min_indx], arr[i]

A = [64, 25, 12, 22, 11]
selectionSort(A)
for i in range(len(A)):
    print("%d" %A[i]),
