// This is a Brute Force Solution for this problem
const nextGreater = (arr, n = arr.length) => {
    for (let i = 0; i < n; i++){
        let next = -1;

        for (let j = i; j < n; j++){
            if (arr[i] < arr[j]){
                next = arr[j];
                break;
            }
        }
        console.log(next);
    }
}

// Solution Using a Stack
const nextGreaterStack = (arr, n = arr.length) => {
    let stack = new stackUsingLL();
    let element, next;

    stack.push(arr[0]);

    for (let i = 0; i < n; i++) {
        next = arr[i];
        if (!stack.isEmpty()) {
            element = stack.pop();
            while (element < next) {
                console.log(next);
                if (stack.isEmpty()) break;
                element = stack.pop();
            }
            if (element > next)
                stack.push(element);
        }
        stack.push(next);
    }
    while (!stack.isEmpty()) {
        element = stack.pop();
        next = -1;
        console.log(next);
    }
}

nextGreaterStack([11, 13, 21, 3]);
