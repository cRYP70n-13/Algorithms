const isValidBST = (root, lowerLimit = Number.NEGATIVE_INFINITY, upperLimit= Number.POSITIVE_INFINITY) => {
    let res = true;

    if (root === null)
        return res;

    if (root.val <= lowerLimit || root.val >= upperLimit)
        return false;

    if (root.left)
        res = res && isValidBST(root.left, lowerLimit, root.val);

    if (root.right)
        res = res && isValidBST(root.right, root.val, upperLimit);

    return res;

};
