/**
 * 826. Most Profit Assigning Work
 * {@link https://leetcode.com/problems/most-profit-assigning-work/ | Link}
 */
export function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  const n = profit.length
  const m = Math.max(...worker)
  const jobs = Array(m + 1).fill(0)

  for (let i = 0; i < n; i++) {
    const d = difficulty[i]
    if (profit[i] <= m) jobs[d] = Math.max(jobs[d], profit[i])
  }

  for (let i = 1; i <= m; i++) {
    jobs[i] = Math.max(jobs[i], jobs[i - 1])
  }

  return worker.reduce((acc, w) => acc + jobs[w], 0)
}

export function maxProfitAssignment2(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  const n = profit.length
  const jobs = Array.from({ length: n }, (_, i) => [difficulty[i], profit[i]])
  jobs.sort(([a], [b]) => a - b)
  worker.sort((a, b) => a - b)

  let [max, i, res] = [0, 0, 0]
  for (const w of worker) {
    while (i < n && jobs[i][0] <= w) {
      max = Math.max(max, jobs[i][1])
      i++
    }
    res += max
  }

  return res
}

function maxProfitAssignment3(difficulty: number[], profit: number[], worker: number[]): number {
  const m = Math.max(...difficulty)
  const jobs = Array(m + 1).fill(0)
  const n = profit.length
  for (let i = 0; i < n; ++i) {
    const d = difficulty[i]
    jobs[d] = Math.max(jobs[d], profit[i])
  }
  for (let i = 1; i <= m; ++i) {
    jobs[i] = Math.max(jobs[i], jobs[i - 1])
  }
  return worker.reduce((acc, w) => acc + jobs[Math.min(w, m)], 0)
}
