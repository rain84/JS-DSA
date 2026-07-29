/**
 * {@link https://leetcode.com/problems/find-champion-ii | 2924. Find Champion II}
 *
 * Topics: Graph
 */
export function findChampion(n: number, edges: number[][]): number {
  const vertexes = new Set<number>(Array.from({ length: n }, (_, i) => i))

  for (const [_, v] of edges) {
    vertexes.delete(v)
  }

  return vertexes.size === 1 ? vertexes[Symbol.iterator]().next().value! : -1
}
