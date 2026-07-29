/**
 * 1196. How Many Apples Can You Put into the Basket
 * {@link https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/ | Link}
 */
export function maxNumberOfApples(weight: number[]): number {
  let [res, sum] = [0, 0]

  weight.sort((a, b) => a - b)
  for (const x of weight) {
    sum += x
    if (sum > 5_000) break
    res++
  }

  return res
}
