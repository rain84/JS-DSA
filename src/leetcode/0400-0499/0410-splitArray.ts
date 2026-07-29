/**
 * 410. Split Array Largest Sum
 * {@link https://leetcode.com/problems/split-array-largest-sum/ | Link}
 */
export function splitArray(nums: number[], k: number): number {
  let l = Math.max(...nums)
  let r = nums.reduce((a, b) => a + b)

  const check = (mid: number) => {
    let [c, sum] = [0, 0]

    for (const x of nums) {
      sum += x

      if (sum > mid) {
        sum = x
        if (++c === k) return false
      }
    }

    return true
  }

  while (l < r) {
    const mid = (l + r) >> 1

    if (check(mid)) r = mid
    else l = mid + 1
  }

  return l
}
