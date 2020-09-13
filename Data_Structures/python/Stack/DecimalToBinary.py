def divide_by_2(num):
    stack = []
    while num > 0:
        rest = num % 2
        stack.append(rest)
        num = num // 2

    bin_str = ''
    while len(stack) != 0:
        bin_str = bin_str + str(stack.pop())
    return bin_str

def toBinary(num2):
    while num2 > 0:
        print(num2 % 2, end="")
        num2 = num2 // 2

print(toBinary(42))
print(divide_by_2(42))
