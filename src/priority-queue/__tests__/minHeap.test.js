import {sampleData} from './sampleData';
import {minHeap} from '../minHeap';

describe('minimum heap', function() {
	test('initializing the min-heap should satisfy the min-heap invariant', function() {
		let heap = minHeap.buildMinHeap(sampleData);

		// min-heap invariant: i >= parent(i)
		// where parent(i) = ⌊i/2⌋
		for (let i = heap.length - 1; i > 1; i--) {
			if (i == 1 && i + 1 <= heap.length - 1) {
				expect(heap[i].weight).toBeLessThanOrEqual(heap[i + 1].weight);
			} else {
				expect(heap[i].weight).toBeGreaterThanOrEqual(
					heap[Math.floor(i / 2)].weight,
				);
			}
		}
	});

	test('inserting a node should maintain the min-heap invariant', function() {
		let testnode = {key: 573, weight: 18};
		let heap = minHeap.minInsert(sampleData, testnode);

		// min-heap invariant: i >= parent(i)
		// where parent(i) = ⌊i/2⌋
		for (let i = heap.length - 1; i != 0; i--) {
			if (i == 1 && i + 1 <= heap.length - 1) {
				expect(heap[i].weight).toBeLessThanOrEqual(heap[i + 1].weight);
			} else {
				expect(heap[i].weight).toBeGreaterThanOrEqual(
					heap[Math.floor(i / 2)].weight,
				);
			}
		}
	});
	// test('the min-heap should handle duplicate insertions appropriately', function() {});

	// test('the last index of the min-heap should be the largest', function() {});
	// test('extracting the minimum value should maintain the heap invariant', function() {});
});
