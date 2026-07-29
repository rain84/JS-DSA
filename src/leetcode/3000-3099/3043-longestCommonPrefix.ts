/**
 * {@link https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/ | 3043. Find the Length of the Longest Common Prefix}
 *
 * Topics: Array | Hash Table | String | Trie
 */
export function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const set = new Set<number>()

  for (const x of arr1) {
    let divider = 1
    let y = (x / divider) | 0

    while (y) {
      set.add(y)
      divider *= 10
      y = (x / divider) | 0
    }
  }

  let res = 0
  for (const x of arr2) {
    let divider = 1
    let y = (x / divider) | 0

    while (y) {
      if (set.has(y)) res = Math.max(res, String(y).length)
      divider *= 10
      y = (x / divider) | 0
    }
  }

  return res
}

export function longestCommonPrefix2(arr1: number[], arr2: number[]): number {
  const set = new Set(
    arr1.flatMap((x) => {
      const arr: string[] = []
      let s = ''
      for (const ch of String(x)) {
        s += ch
        arr.push(s)
      }
      return arr
    })
  )
  let longest = 0

  for (const x of arr2) {
    let s = ''
    for (const ch of String(x)) {
      s += ch
      if (set.has(s)) longest = Math.max(longest, s.length)
    }
  }

  return longest
}
