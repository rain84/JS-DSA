/**
 * 1557. Minimum Number of Vertices to Reach All Nodes
 * {@link https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/ | Link}
 */
export function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const reachable = new Set(edges.map(([_, x]) => x))

  return Array.from({ length: n }, (_, x) => x).filter((x) => !reachable.has(x))
}
