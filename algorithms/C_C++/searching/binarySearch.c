#include <stdio.h>

int     binarySearch(int arr[], int l, int r, int x)
{
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x)
            return mid;
        else if (arr[mid] > x)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return -1;
}

int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 40;
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1) ? printf("The element is not present"
                            " in array")
                   : printf("The element is present at "
                            "index %d",
                            result);
    return 0;
}
