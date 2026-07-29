/**
 * 1823. Find the Winner of the Circular Game
 * {@link https://leetcode.com/problems/find-the-winner-of-the-circular-game/ | Link}
 */
export function findTheWinner(n: number, k: number): number {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  let i = 0

  while (arr.length > 1) {
    i = (i + k - 1) % arr.length
    arr.splice(i, 1)
  }

  return arr[0]
}

export function findTheWinner2(n: number, k: number): number {
  if (n === 1) return 1
  const res = (findTheWinner(n - 1, k) + k) % n
  return res ? res : n
}
