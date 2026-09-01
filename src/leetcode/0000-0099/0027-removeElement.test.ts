import { removeElement, removeElement2 } from './0027-removeElement'

it.each(
	// prettier-ignore
	[
		[[3, 2, 2, 3], 3, 2, [2, 2]],
		[[0, 1, 2, 2, 3, 0, 4, 2], 2, 5, [0, 1, 4, 0, 3]],
		[[], 1, 0, []],
		[[1], 1, 0, []],
		[[1], 2, 1, [1]],
		[[2, 2, 2], 2, 0, []],
		[[1, 2, 3, 4], 5, 4, [1, 2, 3, 4]],
		[[4, 5], 4, 1, [5]],
		[[3, 3], 3, 0, []],
		[[0, 0, 0, 0], 0, 0, []],
	],
)('should remove %i from %p -> length %i', (nums, val, expectedLen, expectedPrefix) => {
	let arr = [...nums]
	let len = removeElement(arr, val)
	expect(len).toBe(expectedLen)
	expect(arr.slice(0, len).sort()).toEqual(expectedPrefix.sort())

	arr = [...nums]
	len = removeElement2(arr, val)
	expect(len).toBe(expectedLen)
	expect(arr.slice(0, len).sort()).toEqual(expectedPrefix.sort())
})
