import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 3016. Minimum Number of Pushes to Type Word II
 * {@link https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/ | Link}
 *
 * Topics: Hash Table | String | Greedy | Sorting | Counting
 *
 * Performance (by 'utils/perf.ts')
───────────────────────────────────────────────────────────────────────────
 (index)  Function               ops/sec  Time (ms)  Iterations  Speed (%)
───────────────────────────────────────────────────────────────────────────
 1        minimumPushes3 (PQ)    146106   684        100000      100.00
 2        minimumPushes          109727   911        100000      75.10
 3        minimumPushes2         84523    1183       100000      57.85
───────────────────────────────────────────────────────────────────────────
 */

export function minimumPushes(word: string): number {
  const cnt = new Map<string, number>()
  let res = 0

  for (const x of word) cnt.set(x, (cnt.get(x) ?? 0) + 1)

  const cnt2 = [...cnt.entries()].sort(([_, a], [__, b]) => b - a)
  for (let i = 0, c = 0; i < cnt2.length; i++) {
    if (i % 8 === 0) c++
    const [x] = cnt2[i]
    res += cnt.get(x)! * c
  }

  return res
}

export function minimumPushes2(word: string): number {
  const cnt = Array(26).fill(0)
  const codeA = 'a'.charCodeAt(0)
  let res = 0

  for (const x of word) {
    cnt[x.charCodeAt(0) - codeA]++
  }

  cnt.sort((a, b) => b - a)
  for (let i = 0; i < 26; i++) {
    res += cnt[i] * (((i / 8) | 0) + 1)
  }

  return res
}

export function minimumPushes3(word: string): number {
  const pq = new MaxPriorityQueue<string>()
  const cnt = new Map<string, number>()
  let [i, res] = [0, 0]

  for (const x of word) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  for (const [x, c] of cnt) {
    pq.enqueue(x, c)
  }

  while (!pq.isEmpty()) {
    const c = pq.dequeue().priority
    res += c * (((i++ / 8) | 0) + 1)
  }

  return res
}
