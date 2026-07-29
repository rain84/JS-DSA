/**
 * {@link https://leetcode.com/problems/partition-labels/?envType=daily-question | 763. Partition Labels}
 *
 * Topics: Hash Table | Two Pointers | String | Greedy
 */
export function partitionLabels(s: string): number[] {
  const res: number[] = []
  const last = new Array(26).fill(0)
  const getIdx = (ch: string) => ch.charCodeAt(0) - 97

  for (let i = 0; i < s.length; i++) {
    last[getIdx(s[i])] = i
  }

  let mx = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    mx = Math.max(mx, last[getIdx(s[i])])

    if (mx === i) {
      res.push(i - j + 1)
      mx = 0
      j = i + 1
    }
  }

  return res
}

export function partitionLabels2(s: string): number[] {
  const res: number[] = []
  const cnt: Record<string, number> = {}
  const set = new Set<string>()

  for (const ch of s) {
    cnt[ch] ??= 0
    cnt[ch]++
  }

  for (let i = 0, c = 0; i < s.length; i++) {
    const ch = s[i]

    set.add(ch)
    cnt[ch]--
    c++

    if (cnt[ch] === 0) set.delete(ch)
    if (set.size === 0) {
      res.push(c)
      c = 0
    }
  }

  return res
}
