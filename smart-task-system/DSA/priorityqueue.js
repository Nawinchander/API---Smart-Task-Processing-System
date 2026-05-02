/// DSA (Priority Queue - Heap)


class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(task) {
    this.heap.push(task);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].priority <= this.heap[index].priority) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return top;
  }

  bubbleDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority)
      smallest = left;

    if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority)
      smallest = right;

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.bubbleDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = PriorityQueue;

