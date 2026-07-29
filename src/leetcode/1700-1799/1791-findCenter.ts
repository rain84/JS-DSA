/**
 * 1791. Find Center of Star Graph
 * {@link https://leetcode.com/problems/find-center-of-star-graph/ | Link}
 */

export function findCenter(edges: number[][]): number {
  const set = new Set<number>()
  let res = 0

  for (const [x1, x2] of edges) {
    if (set.has(-x1)) return x1
    if (set.has(-x2)) return x2
    if (set.has(x1)) set.add(-x1), (res = x1)
    if (set.has(x2)) set.add(-x2), (res = x2)
    if (!set.has(x1)) set.add(x1)
    if (!set.has(x2)) set.add(x2)
  }

  return res
}

export function findCenter2(edges: number[][]): number {
  const cnt: Record<number, number> = {}
  let [max, c] = [0, 0]

  for (const x of edges.flat()) {
    cnt[x] = (cnt[x] ?? 0) + 1
    if (cnt[x] > c) {
      c = cnt[x]
      max = x
      if (c === 3) return max
    }
  }

  return max
}
