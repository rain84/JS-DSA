import type { TreeNode } from './tree-node'

export const visualizeTree = (tree: TreeNode | null, spaceChar = ' ', spacesCount = 2) => {
  const treeRows = treeToStrings(tree, spaceChar, spacesCount) ?? []
  const rows = ['', ...treeRows, '']
  console.log(rows.join('\n'))
}

const treeToStrings = (tree: TreeNode | null, spaceChar: string, spacesCount: number) => {
  if (!tree) return

  let q: TreeNode[] = [tree]
  const layers: (number | string)[][] = [[tree?.val]]

  while (q.length) {
    const qNext: TreeNode[] = []
    const layer: number[] = []

    for (const x of q) {
      const { left, right } = x
      if (left) qNext.push(left)
      if (right) qNext.push(right)
      layer.push(left?.val ?? Number.NaN)
      layer.push(right?.val ?? Number.NaN)
    }
    q = qNext

    const haveDigits = layer.some((x) => !Number.isNaN(+x))
    if (haveDigits) layers.push(layer)
  }

  const maxDigit = Math.max(
    ...layers
      .flat()
      .filter((x) => !Number.isNaN(+x))
      .map(Number)
  )

  const itemWidth = String(maxDigit).length
  for (const l of layers) {
    for (let i = 0; i < l.length; i++) {
      if (Number.isNaN(+l[i])) {
        l[i] = spaceChar.repeat(itemWidth)
        continue
      }

      let ch = String(l[i])
      const currentWidth = ch.length
      const c = (itemWidth - currentWidth) >> 1
      ch = spaceChar.repeat(c) + ch + spaceChar.repeat(c)
      ch = spaceChar.repeat(itemWidth - ch.length) + ch
      l[i] = ch
    }
  }

  const maxItemsInRow = layers.at(-1)!.length
  const rowWidth = maxItemsInRow * itemWidth + (maxItemsInRow - 1) * spacesCount

  const str: string[] = []
  for (const l of layers) {
    const spaceWidth = Math.ceil((rowWidth - l.length * itemWidth) / (l.length + 1))
    const space = spaceChar.repeat(spaceWidth)
    let s = l.join(space)

    const lastLayer = l === layers.at(-1)!
    if (lastLayer) {
      if (Number.isNaN(+l[0])) s = space + s
      if (Number.isNaN(+l.at(-1)!)) s = s + space
    } else s = space + s + space

    str.push(s)
  }

  return str
}
