/**
 * {@link https://leetcode.com/problems/most-beautiful-item-for-each-query | 2070. Most Beautiful Item for Each Query}
 *
 * Topics: Array | Binary Search | Sorting
 */
export function maximumBeauty(items: number[][], queries: number[]): number[] {
  const res = Array(queries.length).fill(0)
  const obj: Record<number, number> = {}
  const arr: number[][] = []

  for (const [k, v] of items) {
    if (obj[k] === undefined || obj[k] < v) {
      obj[k] = v
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    arr.push([+k, v])
  }

  arr

  for (let i = 0; i < queries.length; i++) {
    let [l, r, val] = [0, arr.length - 1, 0]
    const x = queries[i]

    while (l <= r) {
      const mid = (l + r) >> 1
      mid

      if (arr[mid][0] < x) {
        l = mid + 1
        val = arr[mid][1]
      } else r = mid - 1
    }

    l
    // console.log(arr[l][0])
    console.log(queries[i])

    res[i] = l < arr.length && arr[l][0] === x ? arr[l][1] : val
  }

  return res
}

console.log(
  maximumBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
)

//  [[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6],
//  [2,4,5,5,6,6]
