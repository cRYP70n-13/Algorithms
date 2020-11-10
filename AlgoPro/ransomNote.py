from collections import defaultdict

class Solution(object):
	def canSpell(self, magazin, word):
		letters = defaultdict(int)
		for c in magazin:
			letters[c] += 1

		for c in word:
			if letters[c] <= 0:
				return False
			letters[c] -= 1
		return True


print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'bad'))
# True

print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'cat'))
# False