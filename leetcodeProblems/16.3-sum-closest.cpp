#include <bits/stdc++.h>

using namespace std;

int     threeSumCloset(vector<int> nums, int target)
{
    sort(nums.begin(), nums.end());
    int diff = INT_MAX;
    int n = nums.size();
    for (int i = 0; i < n; i++) {
        int low = i + 1;
        int high = n - 1;
        while (low < high) {
            int sum = nums[i] + nums[low] + nums[high];
            if (abs(target - sum) < abs(diff))
                diff = target - sum;
            if (target > sum)
                low++;
            else
                high--;
        }
    }
    return target - diff;
}

int     main(void)
{
    vector<int> arr;
    arr.push_back(-1);
    arr.push_back(2);
    arr.push_back(1);
    arr.push_back(-4);
    cout << threeSumCloset(arr, 1) << endl;
    return (0);
}
