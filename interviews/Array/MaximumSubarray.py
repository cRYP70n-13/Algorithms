def maximumSubArray(arr):
    # Here if i initialized this one with nums[0] I will have a problem with the arr with size = 1
    helper = 0
    max_elem = arr[0]

    for i in range(len(arr)):
        # helper += arr[i]
        helper = max(arr[i], helper + arr[i])
        if max_elem < helper:
            max_elem = helper
    return max_elem


print(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))