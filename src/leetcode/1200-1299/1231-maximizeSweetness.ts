/**
 * 1231. Divide Chocolate
 * {@link https://leetcode.com/problems/divide-chocolate/ | Link}
 */
export function maximizeSweetness(sweetness: number[], k: number): number {
  const check = (sweet: number) => {
    const n = sweetness.length
    for (let i = 0, c = 0, sum = 0; i < n; i++) {
      sum += sweetness[i]
      if (sum >= sweet) {
        if (++c > k) return true
        sum = 0
      }
    }
    return false
  }

  let l = Math.min(...sweetness)
  let r = Math.ceil(sweetness.reduce((a, b) => a + b) / (k + 1))
  while (l < r) {
    const mid = (l + r + 1) >> 1
    if (check(mid)) {
      l = mid
    } else r = mid - 1
  }

  return l
}
