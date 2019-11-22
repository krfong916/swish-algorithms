export let minHeap = {
	buildMinHeap: function(arr) {
		for (let i = arr.length - 1; i != 0; i--) {
			this.minHeapify(arr, i);
		}
		return arr;
	},
	minHeapify: function(arr, index) {
		let smallest = index;
		let leftChild = index * 2;
		let rightChild = index * 2 + 1;
		let heapSize = arr.length - 1;

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
};
