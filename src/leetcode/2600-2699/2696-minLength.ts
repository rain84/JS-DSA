/**
 * {@link https://leetcode.com/problems/minimum-string-length-after-removing-substrings | 2696. Minimum String Length After Removing Substrings}
 *
 * Topics: String | Stack | Simulation
 */
export function minLength(s: string): number {
  const stk: string[] = []

  for (const x of s) {
    if ((stk.at(-1) === 'A' && x === 'B') || (stk.at(-1) === 'C' && x === 'D')) stk.pop()
    else stk.push(x)
  }

  return stk.length
}

export function minLength2(s: string): number {
  let res = s.length

  do {
    res = s.length
    s = s.replaceAll('AB', '').replaceAll('CD', '')
  } while (res !== s.length)

  return res
}

/** One-Liner */
export const minLength3 = (s: string, n = s.length): number =>
  ((s = s.replace(/AB|CD/g, '')), s.length === n) ? n : minLength3(s)
