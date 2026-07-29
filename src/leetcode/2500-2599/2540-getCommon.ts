/**
 * 2540. Minimum Common Value
 * {@link https://leetcode.com/problems/minimum-common-value/ | Link}
 */
export function getCommon(nums1: number[], nums2: number[]): number {
  let p1 = 0
  let p2 = 0
  const l1 = nums1.length
  const l2 = nums2.length

  while (p1 < l1 && p2 < l2) {
    if (nums1[p1] === nums2[p2]) return nums1[p1]
    if (nums1[p1] < nums2[p2]) p1++
    else p2++
  }

  return -1
}
