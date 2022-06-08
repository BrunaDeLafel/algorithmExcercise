const allPathOfBinaryTree = (root) => {
    let pathArr = [];
    searchTreeBranch(root, '', pathArr);

    return pathArr;
}

const searchTreeBranch = (branch, path, pathArr) => {
    path.length > 0 ? path += ('->' + branch.val) : path += branch.val;
    if(branch.left === null && branch.right === null){
        pathArr.push(path);
    }
    if(branch.left){
        searchTreeBranch(branch.left, path, pathArr);
    }
    if(branch.right){
        searchTreeBranch(branch.right, path, pathArr);
    }
}