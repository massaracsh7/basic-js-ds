const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  ListNode
} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return {
      value: this.head.value,
      next: this.head.next
    }
    // remove line with error and write your code here
  }


  enqueue(value) {
    let current = new ListNode(value);
    if (this.head) {
      this.tail.next = current;
      this.tail = current;
    } else {
      this.head = current;
      this.tail = current;
    }
  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
