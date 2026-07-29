/**
 * {@link https://leetcode.com/problems/count-and-say | 38. Count and Say}
 *
 * Topics: String
 */
export function countAndSay(n: number): string {
  let [res, ch] = ['1', '']

  for (let i = 1; i < n; i++) {
    const arr: string[] = []
    const n = res.length
    let c = 1
    ch = res[0]

    for (let j = 1; j < n; j++) {
      if (res[j] !== ch) {
        arr.push(String(c), ch)
        ch = res[j]
        c = 0
      }
      c++
    }
    arr.push(String(c), ch)
    res = arr.join('')
  }

  return res
}
