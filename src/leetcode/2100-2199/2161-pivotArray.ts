/**
 * {@link https://leetcode.com/problems/partition-array-according-to-given-pivot | 2161. Partition Array According to Given Pivot}
 *
 * Topics: Array | Two Pointers | Simulation
 */
export function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length
  const res = Array(n).fill(pivot)

  for (let i = 0, l = 0, j = n - 1, r = n - 1; i < n; i++, j--) {
    if (nums[i] < pivot) res[l++] = nums[i]
    if (nums[j] > pivot) res[r--] = nums[j]
  }

  return res
}

export function pivotArray2(nums: number[], pivot: number): number[] {
  const [a, b, c]: number[][] = [[], [], []]

  for (const x of nums) {
    if (x < pivot) a.push(x)
    else if (x > pivot) c.push(x)
    else b.push(x)
  }
  return [...a, ...b, ...c]
}
