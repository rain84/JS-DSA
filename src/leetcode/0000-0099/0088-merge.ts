/**
 * 88. Merge Sorted Array
 * {@link https://leetcode.com/problems/merge-sorted-array/ | Link}
 * Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m - 1, j = n - 1, k = m + n - 1; k >= 0; k--) {
    nums1[k] = nums1[i] > nums2[j] || j === -1 ? nums1[i--] : nums2[j--]
  }
}

/** from the beginning to the end with a items-swap   */
export function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < m; i++) {
    if (nums1[i] > nums2[0]) {
      ;[nums1[i], nums2[0]] = [nums2[0], nums1[i]]
      for (let j = 0; nums2[j] > nums2[j + 1]; j++) {
        ;[nums2[j], nums2[j + 1]] = [nums2[j + 1], nums2[j]]
      }
    }
  }

  /** populate last n zero-items */
  for (let i = m, j = 0; j < n; i++, j++) nums1[i] = nums2[j]
}
