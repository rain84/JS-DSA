/**
 * 127. Word Ladder
 * {@link https://leetcode.com/problems/word-ladder/ | Link}
 */
export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (!wordList.includes(endWord)) return 0

  const replace = (s: string, i: number, ch: string) => s.slice(0, i) + ch + s.slice(i + 1)
  const { length } = beginWord
  const words: Record<string, string[]> = {}
  const g: Record<string, string[]> = {}

  for (const w of [beginWord, ...wordList]) {
    const derivatives: string[] = []

    for (let i = 0; i < length; i++) {
      const nextW = replace(w, i, '*')
      derivatives.push(nextW)

      g[nextW] ??= []
      g[nextW].push(w)
    }

    words[w] = derivatives
  }

  let res = 0
  let q = words[beginWord]
  const seen = new Set<string>([beginWord])

  while (q.length) {
    const nextQ: string[] = []
    res++

    for (const variant of q) {
      for (const w of g[variant]) {
        if (w === endWord) return res + 1

        if (seen.has(w)) continue
        seen.add(w)

        nextQ.push(...words[w])
      }
    }

    q = nextQ
  }

  return 0
}
