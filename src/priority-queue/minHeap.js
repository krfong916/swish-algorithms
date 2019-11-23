export let minHeap = {
	buildMinHeap: function(arr) {
		for (let i = arr.length - 1; i >= 0; i--) {
			this.minHeapify(arr, i);
		}
		return arr;
	},
	minHeapify: function(arr, index) {
		let smallest = index;
		let leftChild = this.getLeftChild(index);
		let rightChild = this.getRightChild(index);
		let heapSize = this.getHeapSize(arr);

		if (leftChild <= heapSize) {
			if (arr[leftChild].weight < arr[index].weight) {
				smallest = leftChild;
			}
		} else {
			smallest = index;
		}
		if (rightChild <= heapSize) {
			if (arr[rightChild].weight < arr[smallest].weight) {
				smallest = rightChild;
			}
		}
		if (smallest != index) {
			this.swap(arr, index, smallest);
			this.minHeapify(arr, smallest);
		}
	},
	swap: function(arr, index, smallest) {
		let swap = arr[index];
		arr[index] = arr[smallest];
		arr[smallest] = swap;
	},
	getLeftChild: function(index) {
		return index * 2;
	},
	// prettier-ignore
	getRightChild: function(index) {
		return (index * 2) + 1;
	},
	getParent: function(index) {
		if (index != 1) {
			return Math.floor(index / 2);
		} else {
			return 1;
		}
	},
	getHeapSize: function(arr) {
		return arr.length - 1;
	},
	minInsert: function(arr, node) {
		arr.push(node);
		let i = this.getHeapSize(arr);
		while (i > 1 && arr[this.getParent(i)].weight > arr[i].weight) {
			this.swap(arr, i, this.getParent(i));
			i = this.getParent(i);
		}
		return arr;
	},
};
