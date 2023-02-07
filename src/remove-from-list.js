const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a kue equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    let current = l;
    let prev;
    while (current != null) {
      if (current.value == k) {
        if (current == l) {
          current = l.next;
          l.next = null;
          l = current;
          continue;
        } else {
          prev.next = current.next;
          current.next = null;
          current = prev.next;
          continue;
        }
      }
      prev = current;
      current = current.next;
    }

    return l;
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
