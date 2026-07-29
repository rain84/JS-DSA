/**
 * 2053. Kth Distinct String in an Array
 * {@link https://leetcode.com/problems/kth-distinct-string-in-an-array/ | Link}
 *
 * Topics: Array | Hash Table | String | Counting
 */

/** Counting */
export function kthDistinct(arr: string[], k: number): string {
  const cnt = new Map<string, number>()

  for (const x of arr) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  for (const [x, c] of cnt) {
    if (c === 1) k--
    if (!k) return x
  }

  return ''
}

/** Hash Set */
export function kthDistinct2(arr: string[], k: number): string {
  const distinct = new Set<string>()
  const duplicate = new Set<string>()

  for (const x of arr) {
    if (distinct.has(x)) {
      distinct.delete(x)
      duplicate.add(x)
    } else if (!duplicate.has(x)) distinct.add(x)
  }

  for (const x of distinct) {
    if (--k === 0) return x
  }

  return ''
}
