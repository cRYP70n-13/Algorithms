const infixToPostfix = s => {
    let stack = [];
    let result;
    let firstNum;
    let secNum;

    for (let i = 0; i < postArr.length; i++) {
        if ((postArr[i] != "^") && (postArr[i] != "+") && (postArr[i] != "-") && (postArr[i] != "*") && (postArr[i] != "/")) {
            stack.push(+postArr[i]);
        }

        else if ((postArr[i] == "^") || (postArr[i] == "+") || (postArr[i] == "-") || (postArr[i] == "*") || (postArr[i] == "/")) {
            if (postArr[i] == '+') {
                firstNum = stack.pop();
                secNum = stack.pop();
                result = secNum + firstNum;
                stack.push(result);
            }
            else if (postArr[i] == '*') {
                firstNum = stack.pop();
                secNum = stack.pop();
                result = secNum * firstNum;
                stack.push(result);
            }
            else if (postArr[i] == '/') {
                firstNum = stack.pop();
                secNum = stack.pop();
                result = secNum / firstNum;
                stack.push(result);
            }
            else if (postArr[i] == '-') {
                firstNum = stack.pop();
                secNum = stack.pop();
                result = secNum - firstNum;
                stack.push(result);
            }
        }
    }

    let finalRes = stack.pop();
}
