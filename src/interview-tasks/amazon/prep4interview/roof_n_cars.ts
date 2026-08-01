//  Find the minimum length of the roof that covers K cars.

//  You are given an List of positions of cars
//  as to where they are parked.You are also given an integer K.
//  The cars needs to be covered with a roof.
//  You have to find the minimum length
//  of roof that takes to cover K cars.

//  Input : 12,6,5,2      K = 3

//  Explanation:
//  There are two possible roofs that can cover K cars.
//  One that covers the car in 2, 5, 6 parking spots and
//  another roof which covers 5,6,12 parking spots.
//  The length of these two roofs are 5 and 8 respectively.
//  Return 5 since that's the roof with minimum length
//  that covers K cars.

// Output: 5

export const getMinRoof = (arr: number[], n: number) => {
	if (arr.length < n) return 0

	const slice = arr.slice(0, n - 1)
	let i = n - 1
	let result = Number.POSITIVE_INFINITY
	let slicePointer = i

	do {
		slice[slicePointer++] = arr[i]

		const min = Math.min(...slice)
		const max = Math.max(...slice)
		const diff = max - min + 1

		if (slicePointer === n) slicePointer = 0
		if (diff < result) result = diff
	} while (++i < arr.length)

	return result
}
