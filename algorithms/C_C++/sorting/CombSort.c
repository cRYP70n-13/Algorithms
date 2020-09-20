#include <stdio.h>

int getNextGap(int gap)
{
    gap = (gap * 10) / 13;

    if (gap < 1)
        return 1;
    return gap;
}

void    swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

void combSort(int a[], int n)
{
    // Initialize gap
    int gap = n;

    // Initialize swapped as true to make sure that
    // loop runs
    int swapped = 0;

    // Keep running while gap is more than 1 and last
    // iteration caused a swap
    while (gap != 1 || swapped)
    {
        // Find next gap
        gap = getNextGap(gap);

        // Initialize swapped as false so that we can
        // check if swap happened or not
        swapped = 0;

        // Compare all elements with current gap
        for (int i = 0; i < n - gap; i++)
        {
            if (a[i] > a[i + gap])
            {
                swap(&a[i], &a[i + gap]);
                swapped = 1;
            }
        }
    }
}

int main()
{
    int a[] = {8, 4, 1, 56, 3, -44, 23, -6, 28, 0};
    int n = sizeof(a)/sizeof(a[0]);

    combSort(a, n);

    printf("Sorted array: \n");
    for (int i=0; i<n; i++)
        printf("%d ", a[i]);

    return 0;
}
