/**
 * {@link https://leetcode.com/problems/count-good-triplets | 1534. Count Good Triplets}
 *
 * Topics: Array | Enumeration
 */
export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  const n = arr.length
  let res = 0

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          res++
        }
      }
    }
  }

  return res
}
