/**
 * 1105. Filling Bookcase Shelves
 * {@link https://leetcode.com/problems/filling-bookcase-shelves | Link}
 */
export function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length
  const f = Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    let [w, h] = books[i - 1]
    f[i] = f[i - 1] + h

    for (let j = i - 2; j >= 0; j--) {
      w += books[j][0]
      if (w > shelfWidth) break

      h = Math.max(h, books[j][1])
      f[i] = Math.min(f[i], f[j] + h)
    }
  }

  return f[n]
}
