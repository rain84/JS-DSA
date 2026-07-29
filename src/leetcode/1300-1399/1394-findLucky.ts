/**
 * 1394. Find Lucky Integer in an Array
 * {@link https://leetcode.com/problems/find-lucky-integer-in-an-array/ | Link}
 */
export function findLucky(arr: number[]): number {
  const hash: Record<number, number> = {}
  let res = -1

  for (const x of arr) {
    hash[x] = ++hash[x] || 1
  }

  for (const key in hash) {
    const x = +key
    if (hash[x] === x && x > res) res = x
  }

  return res
}
