// https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/

// k largest(or smallest) elements in an array

// Difficulty Level : Medium
// Last Updated : 18 May, 2022

// Question:
// Write an efficient program for printing k largest elements in an array.
// Elements in an array can be in any order.

// For example, if the given array is [1, 23, 12, 9, 30, 2, 50]
// and you are asked for the largest 3 elements i.e., k = 3
// then your program should print
// 50, 30, and 23.

// Time complexity O(n*LogN)
export const getItems = (arr: number[], k: number) => {
	if (!arr.length || arr.length < k) return

	arr.sort((a, b) => (a < b ? -1 : 1))
	const result: number[] = arr.slice(arr.length - k)

	return result
}
