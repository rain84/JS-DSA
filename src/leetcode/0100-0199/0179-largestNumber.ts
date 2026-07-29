/**
 * {@link https://leetcode.com/problems/largest-number/ | 179. Largest Number}
 *
 * Topics: Array | String | Greedy | Sorting
 */
export function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const [ab, ba] = [String(a) + String(b), String(b) + String(a)]
    return +ba - +ab
  })

  return nums[0] ? nums.join('') : '0'
}
