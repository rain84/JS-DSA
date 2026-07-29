/**
 * 350. Intersection of Two Arrays II
 * {@link https://leetcode.com/problems/intersection-of-two-arrays-ii/ | Link}
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []
  const cnt: Record<number, number> = {}

  for (const x of nums1) {
    cnt[x] = (cnt[x] ?? 0) + 1
  }

  for (const x of nums2) {
    if (cnt[x]-- > 0) res.push(x)
  }

  return res
}
