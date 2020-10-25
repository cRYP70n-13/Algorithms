class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        [1,2,3,4,5,6,7,8,9]
        [0,0,0,0,0,1,1,1,1]
        """
        import math

        low, high = 1, n
        mid = int(low + (high - low) / 2)
        
        while high < low :
            if not isBadVersion(mid):
                low = mid + 1
            if isBadVersion(mid):
                high = mid
            mid = int(low + (high - low) / 2)

        return mid
