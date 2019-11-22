# Priority Queue

## What is it

A priority queue is a data structure that maintains the order of values based on types of priority, such as, median, minimum, and maximum priority.
A priority queue also is known as a heap.

### Properties

**Heap Invariant**: One of the properties of the heap is the heap invariant. That is, for any given node n ∈ N, n will have at most two children nodes. Excluding the root node, all nodes must have a parent.
For example, in a max-heap, we calculate parent and children nodes (left and right) in the following way:
Given an index `i`,

- parent: `⌊i/2⌋`(the floor of `i/2`)
- left child: `2i`
- right child: `2i+1`

## What makes it useful

A heap is useful for situations when we need to optimally maintain and perform repeated min/max or median operations.
We can use an array or binary tree to implement a priority queue.

### Operations and complexity

To define operations and runtimes of a heap (we'll use a min-heap here):

- Extract the min:
  - method signature: `extractMin()`
  - psuedocode:
    - remove min.
    - take the last index and place at the root of the heap.
    - heapify (also known as bubble-down) the value.
  - time complexity: `O(log(n))`
- Get the min:
  - time complexity: `O(1)`
  - method signature: `getMin()`
    - returns min
- Heapify:
  - method signature: `heapify(heap, index)`
  - psuedocode:
    - given a heap instance and an index.
    - initialize a variable called `smallest`.
    - initialize variables `leftChild` and `rightChild` be the index of the left and right children of `index`.
    - using the value of `index`, check if the heap invariant is satisfied.
      - Specifically, let `smallest` be the value of `leftChild`, if the left child exists and is less than or equal to the value of `index`.
      - else, `smallest` is the value of the index
      - let `smallest` be the value of the `rightChild`, if the right child exists and is less than or equal to the value of `smallest`.
    - swap `smallest` with `index`
    - recursively call `heapify()` with the heap instance and `smallest`
  - time complexity: `O(log(n))`
- build heap:
  - method signature: `buildHeap(array)`
  - psuedocode:
    - given an unsorted array
    - call `heapify()`
- insert: `Θ()`
- delete: `Θ()`
- increase/decrease-key: `Θ(nlog(n))`
  - have to find node
  - update
  - re-order by placing node at top and pushing down

At most, we have to traverse the height of a binary tree
that is O(h)
logarithmic with respect to

Certain graph algorithms like _blank_, _blank_, and _blank_ use a priority queue to

## When to use it
