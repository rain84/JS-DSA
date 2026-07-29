/**
 * {@link https://leetcode.com/problems/valid-arrangement-of-pairs | 2097. Valid Arrangement of Pairs}
 *
 * Topics: Depth-First Search | Graph | Eulerian Circuit
 */
export function validArrangement(pairs: number[][]): number[][] {
  const n = pairs.length
  const res: number[][] = []
  const start: Record<number, number> = {}
  const p: Record<number, number> = {}

  for (let i = 0; i < n; i++) {
    start[pairs[i][0]] = i
  }

  for (let i = 0; i < n; i++) {
    if (start[pairs[i][1]] !== undefined) {
      p[i] = start[pairs[i][1]]
    }
  }

  p

  const vals = new Set(Object.values(p))
  let i = -1
  for (const x of Object.keys(p)) {
    if (!vals.has(+x)) {
      i = +x
      break
    }
  }
  i
  p

  if (i === -1) return pairs
  let j = vals.size + 1

  j

  while (i !== undefined && j--) {
    res.push(pairs[i])
    i = p[i]
  }

  return res
}

console.log(
  validArrangement([
    [5, 1],
    [4, 5],
    [11, 9],
    [9, 4],
  ])
)

// [[11,9],[9,4],[4,5],[5,1]]
