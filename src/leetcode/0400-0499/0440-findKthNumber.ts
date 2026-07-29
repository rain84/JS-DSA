/**
 * {@link https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/ | 440. K-th Smallest in Lexicographical Order}
 *
 * Topics: Trie
 */
// export function findKthNumber(n: number, k: number): number {
//   let curr = 1
//   k--

//   const countSteps = (steps = 0) => {}

//   while (k) {}

//   return curr
// }

export function findKthNumber2(n: number, k: number): number {
  let res = 0

  const dfs = (x = 0) => {
    const y = x * 10
    for (let i = 0; i < 10; i++) {
      const z = y + i

      if (res) break
      if (0 < z && z <= n) {
        k--
        if (!k) res = z
        if (!res) dfs(z)
      }
    }
  }

  dfs()

  return res
}

export function findKthNumber3(n: number, k: number): number {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  arr.sort()

  return arr[k - 1]
}

export function findKthNumber(n: number, k: number): number {
  const count = (curr: number): number => {
    let next = curr + 1
    let cnt = 0
    while (curr <= n) {
      cnt += Math.min(n - curr + 1, next - curr)
      next *= 10
      curr *= 10
    }
    return cnt
  }

  let curr = 1
  k -= 1
  while (k) {
    const cnt = count(curr)
    if (k >= cnt) {
      k -= cnt
      curr += 1
    } else {
      k -= 1
      curr *= 10
    }
  }
  return curr
}
