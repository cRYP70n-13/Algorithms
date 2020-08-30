const balancedParentheses = s => {
    let stack = [];
    let x;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[')
            stack.push(s[i]);
        else {
            if (stack.length === 0) return false;
            x = stack.pop();
            if (x == ')')
                if (s[i] !== '(') return false;
            else if (x == '[')
                if (s[i] !== ']') return false;
            else if (x == '{')
                if (s[i] !== '}') return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedParentheses('][[]({}[]())'));
