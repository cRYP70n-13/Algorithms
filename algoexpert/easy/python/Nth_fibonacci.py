def Nth_fibonacci(N):
	if N == 1:
		return 0
	elif N == 2:
		return 1
	else:
		return Nth_fibonacci(N - 1) + Nth_fibonacci(N - 2)

# Solution 2: using memoization
# O(n) time | O(n) space
# https://www.quora.com/What-is-memoization

def get_Nth_fibonacci(n, memoize={1: 0, 2: 1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = get_Nth_fibonacci(
            n - 1, memoize) + get_Nth_fibonacci(n - 2, memoize)
        return memoize[n]


# Solution 3: iterative
# O(2^n) time | O(1) space

def get_Nth_fibonacci_itertative(n):
    last_two = [0, 1]
    counter = 3
    while counter <= n:
        next_fib = last_two[0] + last_two[1]
        last_two[0] = last_two[1]
        last_two[1] = next_fib
        counter += 1
    return last_two[1] if n > 1 else last_two[0]
print(get_Nth_fibonacci(6))
