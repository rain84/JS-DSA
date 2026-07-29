/**
 * 1178. Number of Valid Words for Each Puzzle
 * {@link https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/ | Link}
 *
 */
export function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const res: number[] = []
  const wordsMasks = words.reduce<Map<number, number>>((map, w) => {
    const mask = getMask(w)
    map.set(mask, (map.get(mask) ?? 0) + 1)
    return map
  }, new Map())

  for (let i = 0; i < puzzles.length; i++) {
    const puzzle = puzzles[i]
    const p = getMask(puzzle)
    const firstLetterBit = bit(puzzle[0])
    let c = 0

    for (const [w, wc] of wordsMasks) {
      if (firstLetterBit & w && (p & w) === w) c += wc
    }

    res.push(c)
  }

  return res
}

function getMask(s: string) {
  let res = 0
  for (const ch of s) res |= bit(ch)
  return res
}

const A_CODE = 'a'.charCodeAt(0)

function bit(ch: string) {
  return 1 << (ch.charCodeAt(0) - A_CODE)
}
