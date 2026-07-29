/**
 * {@link https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k | 1497. Check If Array Pairs Are Divisible by k}
 *
 * Topics: Array | Hash Table | Counting
 */
export function canArrange(arr: number[], k: number): boolean {
  const cnt = Array(k).fill(0)

  for (const x of arr) {
    const mod = ((x % k) + k) % k
    cnt[mod]++
  }

  for (let i = 1; i < k; i++) {
    if (cnt[i] !== cnt[k - i]) return false
  }

  return cnt[0] % 2 === 0
}
