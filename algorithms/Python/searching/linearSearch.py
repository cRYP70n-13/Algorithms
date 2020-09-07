def search(arr, x):
    """TODO: Docstring for search.

    :arg1: Array
    :returns: Element to search for

    """
    for i in range(0, len(arr)):
        if (arr[i] == x):
            return i
    return -1

arr = [ 2, 3, 4, 10, 40 ];
x = 10;
n = len(arr);
result = search(arr, x)
if(result == -1):
    print("Element is not present in array")
else:
    print("Element is present at index", result);
