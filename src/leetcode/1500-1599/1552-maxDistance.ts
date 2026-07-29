/**
 * 1552. Magnetic Force Between Two Balls
 * {@link https://leetcode.com/problems/magnetic-force-between-two-balls/ | Link}
 */
export function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b)

  const n = position.length
  let left = 1
  let right = Math.ceil(position.at(-1)! / (m - 1))
  let mid = 0

  const check = (gap: number): boolean => {
    let balls = m - 1
    let next = position[0] + gap

    for (let i = 1; i < n; i++) {
      if (position[i] >= next) {
        balls--
        if (!balls) return true
        next = position[i] + gap
      }
    }

    return false
  }

  let res = 0
  while (left <= right) {
    mid = (left + right + 1) >> 1

    if (check(mid)) {
      left = mid + 1
      res = mid
    } else right = mid - 1
  }

  return res
}
