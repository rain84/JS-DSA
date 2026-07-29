export class NumArray {
  #prefixSum: number[]

  constructor(nums: number[]) {
    this.#prefixSum = nums.reduce<number[]>((acc, v) => (acc.push(v + (acc.at(-1) ?? 0)), acc), [])
  }

  sumRange(left: number, right: number): number {
    return this.#prefixSum[right] - (this.#prefixSum[left - 1] ?? 0)
  }
}
