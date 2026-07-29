/**
 * 2285. Maximum Total Importance of Roads
 * {@link https://leetcode.com/problems/maximum-total-importance-of-roads/ | Link}
 */
export function maximumImportance(n: number, roads: number[][]): number {
  const cnt = Array(n).fill(0)
  for (const [x1, x2] of roads) {
    cnt[x1]++
    cnt[x2]++
  }
  cnt.sort((a, b) => a - b)

  let sum = 0
  do sum += cnt[n - 1] * n
  while (--n)

  return sum
}

export function maximumImportance2(n: number, roads: number[][]): number {
  const cnt = Array(n).fill(0)
  for (const [x1, x2] of roads) {
    cnt[x1]++
    cnt[x2]++
  }
  cnt.sort((a, b) => b - a)

  return cnt.reduce((acc, c) => acc + c * n--, 0)
}

export function maximumImportance3(n: number, roads: number[][]): number {
  const cnt = Array.from({ length: n }, (_, i) => [i, 0])
  for (const x of roads.flat()) {
    cnt[x][1]++
  }
  cnt.sort(([_, a], [__, b]) => b - a)

  const cities = Array(n)
  for (let i = 0, val = n; i < n; i++, val--) {
    cities[cnt[i][0]] = val
  }

  return roads.reduce((acc, [x1, x2]) => acc + cities[x1] + cities[x2], 0)
}
