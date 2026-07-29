/**
 * {@link https://leetcode.com/problems/longest-square-streak-in-an-array | 2501. Longest Square Streak in an Array}
 *
 * Topics: Array | Hash Table | Binary Search | Dynamic Programming | Sorting
 */

/** DP */
export function longestSquareStreak(nums: number[]): number {
  const set = new Set(nums)
  const cache = new Map<number, number>()
  const dfs = (x: number): number => {
    if (cache.has(x)) return cache.get(x)!
    if (!set.has(x)) return 0
    cache.set(x, 1 + dfs(x ** 2))
    return cache.get(x)!
  }

  for (const x of set) dfs(x)
  const res = Math.max(...cache.values())

  return res > 1 ? res : -1
}

export function longestSquareStreak2(nums: number[]): number {
  const cnt: Record<number, number> = {}
  const squares = new Set<number>()

  for (const x of new Set(nums)) {
    cnt[x] = (cnt[x] ?? -1) + 1
    cnt[x ** 2] = (cnt[x ** 2] ?? -1) + 1
  }

  for (const key in cnt) {
    const x = +key
    if (cnt[x] || cnt[x ** 2]) {
      squares.add(x)
    }
  }

  if (squares.size <= 1) return -1

  const iterator = squares[Symbol.iterator]()
  let [max, c, x] = [0, 0, iterator.next().value]

  while (x !== undefined) {
    if (squares.has(x)) {
      squares.delete(x)
      x **= 2
      c++
    } else {
      max = Math.max(max, c)
      x = iterator.next().value
      c = 0
    }
  }

  return max
}
