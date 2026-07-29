/**
 * {@link https://leetcode.com/problems/tuple-with-same-product | 1726. Tuple with Same Product}
 *
 * Topics: Array | Hash Table | Counting
 */
export function tupleSameProduct(nums: number[]): number {
  const cnt = new Map<number, number>()
  let res = 0
  nums = [...new Set(nums)]
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const p = nums[i] * nums[j]
      cnt.set(p, (cnt.get(p) ?? 0) + 1)
    }
  }

  for (const [_, v] of cnt) {
    if (v > 1) res += (v * (v - 1)) / 2
  }

  return res << 3
}
