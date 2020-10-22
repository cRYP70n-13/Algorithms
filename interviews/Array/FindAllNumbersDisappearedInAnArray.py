def findAllTheDisappearedElementsInArray(nums):
    hash_table = {}
    res = []

    for num in nums:
        hash_table[num] = 1
    
    for num in range(1, len(nums) + 1):
        if num not in hash_table:
            res.append(num)
    
    return res

# We can also use a Set here but I prefer the hash_table data structure
arr = [4,3,2,7,8,2,3,1]
print(findAllTheDisappearedElementsInArray(arr))