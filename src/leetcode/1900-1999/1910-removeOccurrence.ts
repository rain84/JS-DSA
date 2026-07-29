/**
 * {@link https://leetcode.com/problems/remove-all-occurrences-of-a-substring | 1910. Remove All Occurrences of a Substring}
 *
 * Topics: String | Stack | Simulation
 */
export function removeOccurrences(s: string, part: string): string {
  const i = part.length
  let res = ''

  for (const x of s) {
    res += x

    if (res.endsWith(part)) {
      res = res.slice(0, res.length - i)
    }
  }

  return res
}
