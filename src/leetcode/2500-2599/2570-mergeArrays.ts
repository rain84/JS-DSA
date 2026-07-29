/**
 * {@link https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values | 2570. Merge Two 2D Arrays by Summing Values}
 */
export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const obj: Record<number, number> = {}

  for (const [k, v] of nums1) {
    obj[k] = (obj[k] ?? 0) + v
  }

  for (const [k, v] of nums2) {
    obj[k] = (obj[k] ?? 0) + v
  }

  return Object.entries(obj).map(([k, v]) => [+k, v])
}
