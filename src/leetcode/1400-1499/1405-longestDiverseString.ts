import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/longest-happy-string | 1405. Longest Happy String}
 *
 * Topics: String | Greedy | Heap (Priority Queue)
 */
export function longestDiverseString(a: number, b: number, c: number): string {
  let res = ''
  const pq = new MaxPriorityQueue<Item>({ priority: ({ c }) => c })
  pq.enqueue({ ch: 'a', c: a })
  pq.enqueue({ ch: 'b', c: b })
  pq.enqueue({ ch: 'c', c })

  let prev = { ch: '', c: 0 }
  let last = { ch: '', c: 0 }

  while (pq.size()) {
    const item = pq.dequeue().element
    let c = item.c < prev.c ? 1 : 2

    if (prev.c) pq.enqueue(prev)
    if (last.ch !== item.ch && item.c) last = { ...item, c: 0 }

    while (c-- && item.c && last.c++ < 2) {
      item.c--
      res += item.ch
    }
    prev = item
  }

  return res
}

type Item = {
  ch: string
  c: number
}
