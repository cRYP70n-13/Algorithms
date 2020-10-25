class Solution:
    def guessNumber(self, n):
        low, high = 1, n

        while low <= high:
            mid = (low + high) // 2
            if guess(mid) == 0:
                return mid
            elif guess(mid) == -1:
                high = mid - 1
            elif guess(mid) == 1:
                low = mid + 1


