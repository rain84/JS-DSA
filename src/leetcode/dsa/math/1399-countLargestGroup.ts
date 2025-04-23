/**
 * {@link https://leetcode.com/problems/count-largest-group | 1399. Count Largest Group}
 *
 * Topics: Hash Table | Math
 */
export function countLargestGroup(n: number): number {
  const cnt: number[] = []

  for (let i = 1; i <= n; i++) {
    const sum = [...String(i)].reduce((acc, x) => acc + +x, 0)
    cnt[sum] ??= 0
    cnt[sum]++
  }

  const max = Math.max(...cnt.flat())
  const res = cnt.reduce((acc, x) => acc + +(x === max), 0)

  return res
}
