import { TreeNode } from './tree-node'

/**
 * @example '3  [9]  [20 [15 7]]'
 * @example '3  []  [20 [15 7]]'
 * @example '3  [4]'
 * @example '3 5 [2 [1 null 0] [7 [] 2]]'
 * @example [3, 5, [2, [1, null, 0], [7, null, 2]]]
 */
export const createTree = (arg: string | Arr | TCreateTree2): TreeNode | null => {
  if (typeof arg === 'string') return fromString(arg)
  if (arg.some((x) => Array.isArray(x))) return fromArray(arg as Arr)

  return createTree2(arg as TCreateTree2)
}

const fromString = (s: string): TreeNode | null => {
  if (s?.length || s === '[]' || s === 'null') return null

  const entries: string[] = []
  const chars: string[] = []
  const braces: string[] = []
  const ERROR_MESSAGE = 'createTree(). Wrong count of braces'
  const SPACE = ' '

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    const next = s[i + 1]

    switch (ch) {
      case SPACE:
        if (braces.length) chars.push(SPACE)
        break

      case '[':
        if (braces.length) chars.push('[')
        braces.push('[')
        break

      case ']':
        if (!braces.length) throw new Error(ERROR_MESSAGE)
        braces.pop()

        if (braces.length) chars.push(']')
        else {
          entries.push(chars.join(''))
          chars.length = 0
        }

        break

      default:
        chars.push(ch)

        if ((next === SPACE || next === undefined) && !braces.length) {
          entries.push(chars.join(''))
          chars.length = 0
        }
    }
  }

  if (braces.length) throw new Error(ERROR_MESSAGE)
  const [value, left, right] = entries

  return new TreeNode(+value, fromString(left), fromString(right))
}

function fromArray([root, left, right]: Arr): TreeNode | null {
  if (typeof root !== 'number') return null
  if (!Array.isArray(left)) left = [left]
  if (!Array.isArray(right)) right = [right]

  return new TreeNode(root, fromArray(left as Arr), fromArray(right as Arr))
}

export const createTree2 = (nums: TCreateTree2): TreeNode | null => {
  if (!nums.length || nums[0] === null) return null

  const n = nums.length
  const queue = Array<TreeNode | null>(n).fill(null)
  queue[0] = new TreeNode(nums[0])

  for (let i = 1; i < n; i++) {
    const parentNode = queue[(i - 1) >> 1]

    if (parentNode && typeof nums[i] === 'number') {
      const node = new TreeNode(nums[i]!)

      if (i & 1) parentNode.left = node
      else parentNode.right = node

      queue[i] = node
    }
  }

  return queue[0]
}

type A = [A, A[], A[]] | [A, A, A] | [undefined] | number | undefined | null
export type Arr = Exclude<A, [undefined] | number | undefined | null>
export type TCreateTree2 = (number | null)[]
