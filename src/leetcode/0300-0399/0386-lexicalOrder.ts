/**
 * {@link https://leetcode.com/problems/lexicographical-numbers/ | 386. Lexicographical Numbers}
 *
 * Topics: Depth-First Search | Trie
 */

/*
 * Performance (by 'utils/perf.ts'), args = [[[1,2,3],[4,5],[1,2,3]],]
 *
 * ──────────────────────────────────────────────────────────────────
 *  (index)  Function      ops/sec  Time (ms)  Iterations  Speed (%)
 * ──────────────────────────────────────────────────────────────────
 *  1        lexicalOrder2  360385    277      1000000     100.00
 *  2        lexicalOrder3   76957   1299      1000000     21.35
 *  2        lexicalOrder    69656   1435      1000000     19.33
 * ──────────────────────────────────────────────────────────────────
 */

export function lexicalOrder(n: number): number[] {
  const res: number[] = []

  const dfs = (val: number) => {
    val *= 10
    for (let i = 0; i < 10; i++) {
      const x = val + i
      if (0 < x && x <= n) {
        res.push(x)
        dfs(x)
      }
    }
  }

  dfs(0)

  return res
}

// O(n Log(n))
export function lexicalOrder2(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  return arr.sort()
}

// Solved with Trie DS
export function lexicalOrder3(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => String(i + 1))
  const trie: Trie = {}

  for (const s of arr) {
    let node = trie
    for (const ch of s) {
      node[ch] ??= {}
      node = node[ch]
    }
    node['#'] = null
  }

  const res: number[] = []
  const dfs = (trie: Trie | null, s = '') => {
    if (trie === null) return

    for (const key in trie) {
      if (Object.hasOwn(trie, key)) {
        if (trie[key]?.['#'] === null) {
          res.push(Number(s + key))
        }

        dfs(trie[key], s + key)
      }
    }
  }

  dfs(trie)

  return res
}

type Trie = { [key: string]: Trie | null }
