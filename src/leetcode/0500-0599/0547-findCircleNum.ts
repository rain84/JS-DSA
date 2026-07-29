/**
 * 547. Number of Provinces
 * {@link https://leetcode.com/problems/number-of-provinces/ | Link}
 */

/** Solved with DFS-recursion */
export function findCircleNum(isConnected: number[][]): number {
  const seen = new Set<number>()
  const n = isConnected.length
  let res = 0

  const dfs = (v: number) => {
    seen.add(v)

    for (let j = 0; j < n; j++) {
      if (isConnected[v][j] && !seen.has(j)) {
        dfs(j)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (seen.has(i)) continue

    dfs(i)
    res++
  }

  return res
}

/** Solved iteratively */
export function findCircleNum2(isConnected: number[][]): number {
  const seen = new Set<number>()
  let res = 0

  for (let vertex = 0; vertex < isConnected.length; vertex++) {
    const stack = [isConnected[vertex]]

    if (seen.has(vertex)) continue

    for (const neighbours of stack) {
      for (let n = 0; n < neighbours.length; n++) {
        if (!neighbours[n] || seen.has(n)) continue

        stack.push(isConnected[n])
        seen.add(n)
      }
    }

    res++
  }

  return res
}

/** My 1st solution :) */
export function findCircleNum3(isConnected: number[][]): number {
  // conversion to the matrix of [vertexes][[vertexes]]
  const vertexes = new Map<number, number[]>()

  for (let i = 0; i < isConnected.length; i++) {
    const nodes: number[] = []

    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) nodes.push(j)
    }

    vertexes.set(i, nodes)
  }

  let res = 0

  const seen = new Set<number>()

  for (const [vertex, neighbours] of vertexes) {
    if (seen.has(vertex)) continue

    for (const neighbour of neighbours) {
      if (seen.has(neighbour)) continue

      neighbours.push(...vertexes.get(neighbour)!)
      seen.add(neighbour)
    }

    res++
  }

  return res
}
