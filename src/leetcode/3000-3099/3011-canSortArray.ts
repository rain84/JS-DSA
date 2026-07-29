/**
 * {@link https://leetcode.com/problems/find-if-array-can-be-sorted | 3011. Find If Array Can Be Sorted}
 *
 * Topics: Array | Bit Manipulation | Sorting
 */

/** Segments */
export function canSortArray(nums: number[]): boolean {
  const n = nums.length
  const bits = (x: number) => [...x.toString(2)].reduce((a, b) => a + +b, 0)
  let [prevMax, max, c] = [Number.NEGATIVE_INFINITY, nums[0], bits(nums[0])]

  for (let i = 1; i < n; i++) {
    const x = nums[i]
    const nextC = bits(x)

    if (x < prevMax) return false

    if (c === nextC) {
      max = Math.max(max, x)
    } else {
      c = nextC
      prevMax = max
      max = x
    }
  }

  return true
}

/** Bubble sort */
export function canSortArray2(nums: number[]): boolean {
  const n = nums.length
  const bits = nums.map((x) => [...x.toString(2)].reduce((a, b) => a + +b, 0))

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (nums[j] > nums[j + 1]) {
        if (bits[j] !== bits[j + 1]) return false
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return true
}
