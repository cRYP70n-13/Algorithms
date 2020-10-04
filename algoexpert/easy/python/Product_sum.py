def ProdcutSum(arr, multiplayer=1):
	sum = 0
	for i in arr:
		if type(i) is list:
			sum += ProdcutSum(i, multiplayer + 1)
		else:
			sum += i
	return sum * multiplayer


print(ProdcutSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
print(ProdcutSum([13, 9, [8, -3, 1], 4, 0, [6, [9, 15], 3]]))