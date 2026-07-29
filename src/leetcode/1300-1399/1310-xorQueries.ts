/**
 * {@link https://leetcode.com/problems/xor-queries-of-a-subarray/ | 1310. XOR Queries of a Subarray}
 *
 * Topics: Array | Bit Manipulation | Prefix Sum
 */
export function xorQueries(arr: number[], queries: number[][]): number[] {
  const prefixes = [0]
  for (const x of arr) {
    prefixes.push(prefixes.at(-1)! ^ x)
  }

  return queries.map(([left, right]) => prefixes[right + 1] ^ prefixes[left])
}
