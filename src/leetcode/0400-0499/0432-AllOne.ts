/**
 * {@link https://leetcode.com/problems/all-oone-data-structure/ | 432. All O`one Data Structure}
 *
 * Topics: Hash Table | Linked List | Design | Doubly-Linked List
 */
export class AllOne {
  #map = new Map<string, number>()
  #max = 0
  #min = 0

  inc(key: string): void {
    const cnt = (this.#map.get(key) ?? 0) + 1
    this.#map.set(key, cnt)

    this.#max = Math.max(this.#max, cnt)
  }

  dec(key: string): void {
    if (!this.#map.has(key)) return

    const cnt = this.#map.get(key)! - 1
    if (cnt === 0) this.#map.delete(key)
    this.#map.set(key, cnt)
  }

  getMaxKey(): string {}

  getMinKey(): string {}
}
