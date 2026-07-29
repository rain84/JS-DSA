/**
 * {@link https://leetcode.com/problems/remove-sub-folders-from-the-filesystem | 1233. Remove Sub-Folders from the Filesystem}
 *
 * Topics:Array | String | Depth-First Search | Trie
 */

/** Trie */
export function removeSubfolders(folder: string[]): string[] {
  const createTrie = (): Trie => ({ '#': false, children: {} })
  const trie = createTrie()

  for (const f of folder) {
    const path = f.split('/')
    let node = trie

    for (let i = 1; i < path.length; i++) {
      const p = path[i]
      if (!node.children[p]) node.children[p] = createTrie()
      node = node.children[p]
    }
    node['#'] = true
  }

  const res: string[] = []
  const dfs = (trie: Trie, path = '') => {
    if (trie['#']) {
      res.push(path)
      return
    }

    for (const key in trie.children) {
      dfs(trie.children[key], path + '/' + key)
    }
  }

  dfs(trie)

  return res
}

type Trie = {
  '#': boolean
  children: Record<string, Trie>
}

/** Sorting */
export function removeSubfolders2(folder: string[]): string[] {
  let s = folder[1]
  return folder.sort().filter((x) => !x.startsWith(s + '/') && (s = x))
}

/** One-Liner */
export const removeSubfolders3 = (folder: string[], s = folder[1]): string[] =>
  folder.sort().filter((x) => x.indexOf(s + '/') && (s = x))
