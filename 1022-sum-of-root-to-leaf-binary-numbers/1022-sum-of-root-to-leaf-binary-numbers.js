/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let val = 0;

    function method(node, path) {
        if (!node) return;

        path.push(node.val.toString());

        if (!node.left && !node.right) {
            val += parseInt(path.join(""), 2);
        } else {
            method(node.left, path);
            method(node.right, path);
        }

        path.pop(); // backtrack
    }

    method(root, []);
    return val;
};