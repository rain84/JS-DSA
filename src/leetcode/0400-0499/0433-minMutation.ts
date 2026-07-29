/**
 * 433. Minimum Genetic Mutation
 * {@link https://leetcode.com/problems/minimum-genetic-mutation/ | Link}
 */
export function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const seen = new Set<string>()
  const q: [string, number][] = [[startGene, 0]]

  for (const [gene, depth] of q) {
    if (gene === endGene) return depth
    if (seen.has(gene)) continue
    seen.add(gene)

    for (const next of bank) {
      let c = 2

      for (let k = 0; k < 8 && c > 0; k++) {
        if (gene[k] !== next[k]) c--
      }

      if (c) q.push([next, depth + 1])
    }
  }

  return -1
}
