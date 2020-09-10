class Solution(object):
    def plusOne(self, digits):
        return map(int, str(int(''.join(str(d) for d in digits)) + 1))
