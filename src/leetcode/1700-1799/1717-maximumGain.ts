/**
 * 1717. Maximum Score From Removing Substrings
 * {@link https://leetcode.com/problems/maximum-score-from-removing-substrings/ | Link}
 */
export function maximumGain(s: string, x: number, y: number): number {
  const stack: string[] = []
  const pairs: Record<string, string> = { a: 'b', b: 'a' }
  const pair = x > y ? ['a', 'b'] : ['b', 'a']
  let str = [...s]
  let res = 0
  let havePairs = true

  while (havePairs) {
    for (const p of pair) {
      havePairs = true

      for (const ch of str) {
        if (stack.at(-1) === p && ch === pairs[p]) {
          stack.pop()
        } else stack.push(ch)
      }

      if (str.length === stack.length) havePairs = false

      const multiplier = p === 'a' ? x : y
      res += (multiplier * (str.length - stack.length)) / 2
      str = [...stack]
      stack.length = 0
    }
  }

  return res
}

/** Time Limit Exceeded on s.length === 100000 */
export function maximumGain2(s: string, x: number, y: number): number {
  const subNodes: Node[] = []
  let res = 0

  let list: Node | null = { val: '', next: null, prev: null }
  let node = list
  for (const ch of s) {
    node.next = { val: ch, next: null, prev: node }
    node = node.next
    if ('ab'.includes(ch)) subNodes.push(node)
  }
  list = list.next

  const seen = new Set<Node | null>()
  const shouldSearch = { ab: true, ba: true }
  let target: keyof typeof shouldSearch = x > y ? 'ab' : 'ba'

  while (shouldSearch.ab || shouldSearch.ba) {
    shouldSearch[target] = false
    for (const node of subNodes) {
      if (seen.has(node)) continue

      const substr = node.val + (node.next?.val ?? '')

      if (target === substr) {
        shouldSearch.ab = true
        shouldSearch.ba = true
        seen.add(node).add(node.next)
        res += target === 'ab' ? x : y

        const prev = node.prev
        const next = node.next?.next
        if (prev) prev.next = next ?? null
        if (next) next.prev = prev ?? null
      }
    }

    if (!shouldSearch[target]) target = target === 'ab' ? 'ba' : 'ab'
  }

  return res
}

/**  Time Limit Exceeded on s.length === 84070 */
export function maximumGain3(s: string, x: number, y: number): number {
  const map = { ab: x, ba: y }
  let subStr: keyof typeof map = x > y ? 'ab' : 'ba'
  let i = s.indexOf(subStr)
  let res = 0

  while (i !== -1) {
    res += map[subStr]
    s = s.slice(0, i) + s.slice(i + 2)
    i = s.indexOf(subStr)

    if (i === -1) {
      subStr = subStr === 'ab' ? 'ba' : 'ab'
      i = s.indexOf(subStr)
    }
  }

  return res
}

type Node = { val: string; prev: Node | null; next: Node | null }
