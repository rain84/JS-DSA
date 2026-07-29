/**
 * {@link https://leetcode.com/problems/find-missing-and-repeated-values | 2965. Find Missing and Repeated Values}
 *
 * Topics: Array | Hash Table | Math | Matrix
 */
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length
  const cnt = Array(n * n + 1).fill(0)
  const res = [0, 0]

  for (const arr of grid) {
    for (const x of arr) {
      if (++cnt[x] === 2) {
        res[0] = x
      }
    }
  }

  for (let i = 1; ; i++) {
    if (cnt[i] === 0) {
      res[1] = i
      break
    }
  }

  return res
}

export function findMissingAndRepeatedValues2(grid: number[][]): number[] {
  const n = grid.length
  const set = new Set(Array.from({ length: n * n }, (_, i) => i + 1))
  const res = [0, 0]

  for (const arr of grid) {
    for (const x of arr) {
      if (!set.has(x)) res[0] = x
      set.delete(x)
    }
  }

  res[1] = set[Symbol.iterator]().next().value!

  return res
}
