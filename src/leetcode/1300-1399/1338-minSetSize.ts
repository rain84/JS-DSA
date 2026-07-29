/**
 * 1338. Reduce Array Size to The Half
 * {@link https://leetcode.com/problems/reduce-array-size-to-the-half/ | Link}
 */
export function minSetSize(arr: number[]): number {
  const cnt: Record<number, number> = {}
  let n = arr.length >> 1
  let res = 0

  for (const x of arr) {
    cnt[x] = (cnt[x] ?? 0) + 1
  }

  const counts = Object.values(cnt).sort((a, b) => b - a)

  for (const c of counts) {
    n -= c
    res++
    if (n <= 0) break
  }

  return res
}
