/**
 * 560. Subarray Sum Equals K
 * {@link https://leetcode.com/problems/subarray-sum-equals-k/ | Link}
 */
export function subarraySum(nums: number[], k: number): number {
  const cnt = new Map([[0, 1]])
  let [sum, res] = [0, 0]

  for (const x of nums) {
    sum += x
    res += cnt.get(sum - k) ?? 0
    cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
  }

  return res
}
