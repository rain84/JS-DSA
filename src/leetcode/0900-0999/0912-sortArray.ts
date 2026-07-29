/**
 * 912. Sort an Array
 * {@link https://leetcode.com/problems/sort-an-array/ | Link}
 */
export function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums

  const pivot = nums.length >> 1
  const left = sortArray(nums.slice(0, pivot))
  const right = sortArray(nums.slice(pivot))
  const res: number[] = []
  let [i, j, m, n] = [0, 0, left.length, right.length]

  while (i < m && j < n) {
    res.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  const [rest, k] = i === m ? [right, j] : [left, i]
  res.push(...rest.slice(k))

  return res
}
