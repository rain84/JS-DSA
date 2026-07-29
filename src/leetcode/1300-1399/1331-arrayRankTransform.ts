/**
 * {@link https://leetcode.com/problems/rank-transform-of-an-array | 1331. Rank Transform of an Array}
 */
export function arrayRankTransform(arr: number[]): number[] {
  const sorted = [...new Set(arr)].sort((a, b) => a - b)
  const map = new Map<number, number>()
  let c = 1

  for (const x of sorted) {
    map.set(x, c++)
  }

  return arr.map((x) => map.get(x)!)
}

/** One-liner */
export const arrayRankTransform2 = (arr: number[]): number[] =>
  ((sorted, h, c) => (sorted.map((x) => h.set(x, c++)), arr.map((x) => h.get(x))))(
    [...new Set(arr)].sort((a, b) => a - b),
    new Map(),
    1
  )
