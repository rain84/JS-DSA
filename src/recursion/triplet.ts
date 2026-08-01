// Find a triplet that sum to a given value
// Difficulty Level : Medium
// Last Updated : 21 Aug, 2022

// Given an array and a value, find if there is a triplet in array
// whose sum is equal to the given value.
// If there is such a triplet present in array, then print the triplet and return true.
// Else return false.

export const run = (input: number[], sum: number, size: number) => {
	if (input.length < size) return false

	const pointer = {
		left: 0,
		right: input.length - 1,
	}
	const value = {
		left: Number.NEGATIVE_INFINITY,
		right: Number.POSITIVE_INFINITY,
	}

	const result: number[][] = []

	do {
		value.left = input[pointer.left]
		value.right = input[pointer.right]
		const currentSum = value.left + value.right

		if (currentSum === sum) {
			result.push([value.left, value.right])
			pointer.left++
			pointer.right--
		} else if (currentSum < sum) pointer.left++
		else pointer.right--
	} while (pointer.left < pointer.right)

	return result
}

export const getSubarraysEqualsToSum = (arr: number[], sum: number, size: number) => {
	const input = [...new Set(arr)]
	input.sort((a, b) => a - b)
	const result: number[][] = []

	if (size < 2) return false

	return result
}

export const getTriplet = (arr: number[], sum: number) => {
	return getSubarraysEqualsToSum(arr, sum, 3)
}
