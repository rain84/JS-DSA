/**
 * 71. Simplify Path
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/4610/ | Link}
 *
 */
export function simplifyPath(path: string): string {
  const res: string[] = []

  for (const s of path.split('/')) {
    switch (s) {
      case '':
      case '.':
        break
      case '..':
        res.pop()
        break
      default:
        res.push(s)
        break
    }
  }

  return `/${res.join('/')}`
}

/** My 1st working solution of the problem :) */
export function simplifyPath2(path: string): string {
  const DELIMITER = '/'
  const res: string[] = []
  const sx: string[] = []

  if (path[0] !== DELIMITER) res.push(DELIMITER)

  for (let i = 0; i < path.length; i++) {
    const ch = path[i]

    // handle delimiters
    if (ch === DELIMITER) {
      if (res.at(-1) !== DELIMITER) res.push(DELIMITER)
      continue
    }

    const next = path[i + 1]
    sx.push(ch)

    // collect symbols between 2 DELIMITERs
    if (next && next !== DELIMITER) continue

    const s = sx.join('')

    switch (s) {
      case '.':
        break

      case '..':
        // '/foo/moo/../bar' remove previous dir, i.e. '/foo/bar'
        {
          let c = 1
          do {
            if (res.pop() === DELIMITER) c--
          } while (res.at(-1) !== DELIMITER && !c && res.length)
        }
        break

      default:
        res.push(s)
        break
    }

    sx.length = 0
  }

  // remove DELIMITER at the end
  if (res.at(-1) === DELIMITER && res.length > 2) res.pop()

  // when res === ''
  if (!res.length) res.push(DELIMITER)

  return res.join('')
}
