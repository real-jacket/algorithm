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
 * @return {boolean}
 */
function isValidate(root) {
  const arr = [];

  function readTree(node) {
    if (!node) return;
    readTree(node.left);
    arr.push(node.value);
    readTree(node.right);
  }
  readTree(root);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function isValidateRecursion(root) {
  let pre = null;

  function readTree(node) {
    if (!node) return true;

    const left = readTree(node.left);

    if (pre && pre.val >= node.val) {
      return false;
    }

    pre = node;

    const right = readTree(node.right);

    return left && right;
  }

  return readTree(root);
}
