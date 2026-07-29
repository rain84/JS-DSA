/**
 * 1248. Count Number of Nice Subarrays
 * {@link https://leetcode.com/problems/count-number-of-nice-subarrays/ | Link}
 */
export function numberOfSubarrays(nums: number[], k: number): number {
  let [sum, res] = [0, 0]
  const cnt = new Map([[0, 1]])

  for (const x of nums) {
    sum += x & 1
    res += cnt.get(sum - k) ?? 0
    cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
  }

  return res
}
