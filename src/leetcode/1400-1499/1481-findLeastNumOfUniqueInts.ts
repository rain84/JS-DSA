/**
 * 1481. Least Number of Unique Integers after K Removals
 * {@link https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/ | Link}
 */
export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const cnt: Map<number, number> = new Map()
  for (const x of arr) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  const nums = [...cnt.values()].sort((a, b) => a - b)

  for (let i = 0; i < nums.length; ++i) {
    k -= nums[i]
    if (k < 0) {
      return nums.length - i
    }
  }
  return 0
}

export function findLeastNumOfUniqueInts3(arr: number[], k: number): number {
  const cnt: Record<number, number> = {}
  for (const x of arr) {
    cnt[x] = (cnt[x] ?? 0) + 1
  }

  const counts = Object.values(cnt).sort((a, b) => a - b)

  for (let i = 0; i < counts.length; i++) {
    k -= counts[i]
    if (k < 0) return counts.length - i
  }

  return 0
}

export function findLeastNumOfUniqueInts2(arr: number[], k: number): number {
  const cnt: Record<number, [number, number]> = {}
  for (const x of arr) {
    cnt[x] ??= [x, 0]
    cnt[x][1]++
  }

  const items = Object.values(cnt)
    .sort(([_, a], [__, b]) => a - b)
    .slice(0, k)

  for (const [x] of items) {
    k -= cnt[x][1]
    if (k >= 0) delete cnt[x]
  }

  return Object.keys(cnt).length
}
