class Solution():
	def balancedArray(self, arr, n):
		sum1 = 0
		for i in range(n // 2):
			sum1 += arr[i]
		
		sum2 = 0
		for i in range(n // 2, n):
			sum2 += arr[i]
		return abs(sum1 - sum2)

# Drive Code
test = Solution()
print(test.balancedArray([1, 5, 8, 2], 4))