/**
 * 1122. Relative Sort Array
 * {@link https://leetcode.com/problems/relative-sort-array/ | Link}
 */
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const cnt = Array(1001).fill(0)
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY

  for (const x of arr1) {
    cnt[x]++
    if (x < min) min = x
    if (x > max) max = x
  }

  const res: number[] = []
  for (const x of arr2) {
    while (cnt[x]) {
      cnt[x]--
      res.push(x)
    }
  }

  for (let i = min; i <= max; i++) {
    while (cnt[i]) {
      cnt[i]--
      res.push(i)
    }
  }

  return res
}
