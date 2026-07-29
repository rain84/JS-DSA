// import { ListNode, create } from '../utils/linked-list'

import { ListNode } from '../utils/linked-list'

/**
 * {@link https://leetcode.com/problems/spiral-matrix-iv/ | 2326. Spiral Matrix IV}
 *
 * Topics: Array | Linked List | Matrix | Simulation
 */
export function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  const res: number[][] = Array.from({ length: m }, () => Array(n).fill(-1))
  let [x, y, d, turn, size] = [-1, 0, 0, 0, n]

  while (m && n && head) {
    for (let i = 0; i < size; i++) {
      y += dir[d][0]
      x += dir[d][1]

      if (!head) break
      res[y][x] = head.val
      head = head.next
    }

    turn ^= 1
    if (turn) size = --m
    else size = --n

    d = (d + 1) % 4
  }
  return res
}
