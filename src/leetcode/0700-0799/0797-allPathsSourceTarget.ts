/**
 * 797. All Paths From Source to Target
 * {@link https://leetcode.com/problems/all-paths-from-source-to-target/ | Link}
 */
export function allPathsSourceTarget(graph: number[][]): number[][] {
  const res: number[][] = []

  const dfs = (path: number[]) => {
    const curr = path.at(-1)!
    if (curr === graph.length - 1) {
      res.push([...path])
      return
    }

    for (const x of graph[curr]) {
      path.push(x)
      dfs(path)
      path.pop()
    }
  }

  dfs([0])

  return res
}
