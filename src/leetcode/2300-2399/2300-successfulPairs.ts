/**
 * 2300. Successful Pairs of Spells and Potions
 * {@link https://leetcode.com/problems/successful-pairs-of-spells-and-potions/ | Link}
 */
export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const res: number[] = []
  const n = potions.length
  const binarySearch = (target: number) => {
    let [l, r] = [0, n - 1]

    while (l <= r) {
      const mid = (l + r) >> 1
      if (target > potions[mid]) l = mid + 1
      else r = mid - 1
    }

    return l
  }

  potions.sort((a, b) => a - b)

  for (const x of spells) {
    const target = Math.ceil(success / x)
    const i = binarySearch(target)
    res.push(n - i)
  }

  return res
}
