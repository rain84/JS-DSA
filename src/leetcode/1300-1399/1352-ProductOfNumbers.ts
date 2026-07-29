/**
 * {@link https://leetcode.com/problems/product-of-the-last-k-numbers | 1352. Product of the Last K Numbers}
 *
 * Topics: Array | Math | Design | Data Stream | Prefix Sum§
 */
export class ProductOfNumbers {
  #prefixSum = [1]

  add(num: number): void {
    if (num === 0) {
      this.#prefixSum = [1]
    } else {
      const i = this.#prefixSum.length
      this.#prefixSum[i] = this.#prefixSum[i - 1] * num
    }
  }

  getProduct(k: number): number {
    const i = this.#prefixSum.length
    if (k > i - 1) return 0
    return this.#prefixSum[i - 1] / this.#prefixSum[i - k - 1]
  }
}
