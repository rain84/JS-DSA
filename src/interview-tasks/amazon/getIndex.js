// Given a sorted array of integers, nums, and a target,
// return the index of the target within nums.
// If it does not exist, return the index of where target should be inserted.
//
// Ex: Given the following nums and target...
// nums = [1, 5, 8, 12], target = 12, return 3.
//
// Ex: Given the following nums and target...
// nums = [3, 4, 7, 12, 29], target = 5, return 2.

export const getIndex = (
	arr,
	target,
	left = 0,
	right = arr.length,
	middle = ~~((left + right) / 2),
	el = arr[middle],
) => {
	if (el === target || left === right) return middle
	if (arr[right - 1] <= target) return right
	if (target <= arr[left]) return left

	if (0 < target - el) left = middle
	else right = middle

	return getIndex(arr, target, left, right)
}
