/**
 * {@link https://leetcode.com/problems/divide-players-into-teams-of-equal-skill | 2491. Divide Players Into Teams of Equal Skill}
 *
 * Topics: Array | Hash Table | Two Pointers | Sorting
 */

/**  Counting, O(n)  */
export function dividePlayers(skill: number[]): number {
  let [sum, res, map] = [0, 0, new Map<number, number>()]

  for (const x of skill) {
    sum += x
    map.set(x, (map.get(x) || 0) + 1)
  }
  sum /= skill.length / 2

  for (let [x, c] of map) {
    const complement = sum - x
    if ((map.get(complement) ?? 0) !== c) return -1
    if (x === complement) c /= 2

    res += x * complement * c
    map.delete(x)
    map.delete(complement)
  }

  return res
}

/**  Sorting, O(n* log(n))  */
export function dividePlayers2(skill: number[]): number {
  const n = skill.length
  let [sum, res] = [0, 0]

  for (const x of skill) sum += x
  sum /= n / 2

  skill.sort((a, b) => a - b)
  for (let i = 0; i < n / 2; i++) {
    const [a, b] = [skill[i], skill[n - i - 1]]
    if (a + b !== sum) return -1
    res += a * b
  }

  return res
}
