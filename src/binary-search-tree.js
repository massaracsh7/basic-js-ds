const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.newroot = null;
  }

  root() {
    return this.newroot;
    // remove line with error and write your code here
  }

  add(data) {
    this.newroot = addWithin(this.newroot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.newroot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findWithin(this.newroot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ?
        findWithin(node.left, data) :
        findWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.root = removeNode(this.newroot, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.newroot) {
      return;
    }

    let node = this.newroot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.newroot) {
      return;
    }

    let node = this.newroot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
