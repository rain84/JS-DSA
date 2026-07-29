/**
 * {@link https://leetcode.com/problems/path-with-maximum-probability/ | 1514. Path with Maximum Probability}
 *
 * Topics: Array | Graph | Heap (Priority Queue) | Shortest Path
 */
export function maxProbability(
  n: number,
  edges: number[][],
  successProb: number[],
  start: number,
  end: number
): number {
  const maxProb = Array(n).fill(0)
  maxProb[start] = 1

  for (let i = 0; i < n - 1; i++) {
    let hasUpdate = false

    for (let j = 0; j < edges.length; j++) {
      const [u, v] = edges[j]
      const pathProb = successProb[j]

      if (maxProb[u] * pathProb > maxProb[v]) {
        maxProb[v] = maxProb[u] * pathProb
        hasUpdate = true
      }

      if (maxProb[v] * pathProb > maxProb[u]) {
        maxProb[u] = maxProb[v] * pathProb
        hasUpdate = true
      }
    }

    if (!hasUpdate) break
  }

  return maxProb[end]
}
