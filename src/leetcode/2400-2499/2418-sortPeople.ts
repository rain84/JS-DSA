import { perf } from 'utils/perf'

/**
 * 2418. Sort the People
 * {@link https://leetcode.com/problems/sort-the-people/ | Link}
 */
export function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((n, i) => ({ n, h: heights[i] }))
    .sort((a, b) => b.h - a.h)
    .map(({ n }) => n)
}

export function sortPeople2(names: string[], heights: number[]): string[] {
  const idx = mergeSort(heights)
  const heightsToNames = names.reduce<Record<number, string>>(
    (acc, name, i) => ((acc[heights[i]] = name), acc),
    {}
  )

  return idx.map((i) => heightsToNames[i])
}

const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums

  const pivot = nums.length >> 1
  const left = mergeSort(nums.slice(0, pivot))
  const right = mergeSort(nums.slice(pivot))

  let [i, j] = [0, 0]
  const [n, m] = [left.length, right.length]
  const res = []
  while (i < n && j < m) {
    res.push(left[i] > right[j] ? left[i++] : right[j++])
  }

  const rest = i === n ? right.slice(j) : left.slice(i)
  res.push(...rest)

  return res
}
