/**
 * 1089. Duplicate Zeros
 * {@link https://leetcode.com/problems/duplicate-zeros/ | Link}
 *
 * Topics: Array | Two Pointers
 *
 * Given a fixed-length integer array arr, duplicate each occurrence of zero,
 * shifting the remaining elements to the right.
 * Elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place.
 */
export function duplicateZeros(arr: number[]): void {
  const n = arr.length
  let zeros = 0
  let length = n - 1

  // Pass 1: count zeros that will be duplicated
  for (let left = 0; left <= length; left++) {
    if (left > length - zeros) break
    if (arr[left] === 0) {
      if (left === length - zeros) {
        arr[length] = 0
        length--
        break
      }
      zeros++
    }
  }

  // Pass 2: copy from the end
  let last = length - zeros
  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zeros] = 0
      zeros--
      arr[i + zeros] = 0
    } else {
      arr[i + zeros] = arr[i]
    }
  }
}