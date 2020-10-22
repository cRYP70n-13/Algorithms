def maximumSubArray(arr):
    helper = 0
    max_elem = arr[0]

    for num in arr:
        helper += num
        max_elem = max(num, helper + num)
        if max_elem < helper:
            max_elem = helper
    return max_elem


print(maximumSubArray([[-2,1,-3,4,-1,2,1,-5,4]]))