/**
 * {@link https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings | 1593. Split a String Into the Max Number of Unique Substrings}
 *
 * Topics: Hash Table | String | Backtracking
 */
export function maxUniqueSplit2(s: string): number {
  const set = new Set<string>()
  let [str, last] = ['', '']

  for (const ch of s) {
    str += ch

    if (!set.has(str)) {
      set.add(str)
      last = str
      str = ''
    }
  }

  if (str) {
    set.delete(last)
    set.add(last + str)
  }

  ;('wwwzfvedwfvhsww')
  console.log([...set])
  return set.size || 1
}

console.log(maxUniqueSplit('wwwzfvedwfvhsww'))

export function maxUniqueSplit(s: string): number {
  let res = 1
  const seen = new Set<string>()
  const dfs = (i: number, t: number) => {
    if (i >= s.length) {
      res = Math.max(res, t)
      return
    }

    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.slice(i, j)

      if (!seen.has(substr)) {
        seen.add(substr)
        dfs(j, t + 1)
        seen.delete(substr)
      }
    }
  }

  dfs(0, 0)

  return res
}
