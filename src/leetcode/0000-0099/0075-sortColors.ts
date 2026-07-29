/**
 * 5. Sort Colors
 * {@link https://leetcode.com/problems/sort-colors/ | Link}
 */
export function sortColors(nums: number[]): void {
  const cnt: number[] = [0, 0, 0]

  for (const x of nums) cnt[x]++

  for (let i = 0, j = 0; i < 3; i++) {
    while (cnt[i]--) nums[j++] = i
  }
}

/** a very specific solution */
export function sortColors2(nums: number[]): void {
  for (let i = 0, p0 = 0, p2 = nums.length - 1; i <= p2; ) {
    switch (nums[i]) {
      case 0:
        ;[nums[i], nums[p0]] = [nums[p0], nums[i]]
        p0++
        i++
        break
      case 1:
        i++
        break
      case 2:
        ;[nums[i], nums[p2]] = [nums[p2], nums[i]]
        p2--
        break
    }
  }
}
