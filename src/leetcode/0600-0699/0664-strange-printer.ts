/**
 * {@link https://leetcode.com/problems/strange-printer/ | 664. Strange Printer}
 *
 * Topics: String | Dynamic Programming
 */
export function strangePrinter(s: string): number {
  const a = [...s].reduce<string[]>((acc, x) => (acc.at(-1) !== x && acc.push(x), acc), [])

  const getTurns = (i: number, j: number): number => {
    let [iNext, jNext] = [i, j]

    if (jNext < i || iNext > j) return 0

    while (jNext !== i) {
      if (a[jNext] === a[i]) break
      jNext--
    }

    while (iNext !== j) {
      if (a[iNext] === a[j]) break
      iNext++
    }

    if (jNext === i) return 1 + getTurns(i + 1, j)
    if (iNext === j) return 1 + getTurns(i, j - 1)

    return jNext - i > j - iNext
      ? 1 + getTurns(i + 1, jNext - 1) + getTurns(jNext + 1, j)
      : 1 + getTurns(i, iNext - 1) + getTurns(iNext + 1, j - 1)
  }

  return getTurns(0, a.length - 1)
}

console.log(strangePrinter('tbgtgb'))
