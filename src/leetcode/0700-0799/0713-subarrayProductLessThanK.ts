/**
 * 713. Subarray Product Less Than K
 * {@link https://leetcode.com/problems/subarray-product-less-than-k | Link}
 *
 */
export function numSubarrayProductLessThanK(arr: number[], k: number): number {
  if (k <= 1) return 0

  let l = 0
  let product = 1
  let res = 0

  for (let r = 0; r < arr.length; r++) {
    product *= arr[r]

    while (product >= k) product /= arr[l++]

    res += r - l + 1
  }

  return res
}

export const subarrayProductLessThanK = (arr: number[], maxProduct: number): number[][] => {
  const res: number[][] = []

  for (let size = 1; size <= arr.length; size++) {
    for (let l = 0; l + size <= arr.length; l++) {
      let product = 1
      const nextArr: number[] = []
      for (let l2 = l; l2 < l + size; l2++) {
        product *= arr[l2]
        nextArr.push(arr[l2])
      }

      if (product < maxProduct) {
        product
        res.push(nextArr)
      }
    }
  }

  return res
}
