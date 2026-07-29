/**
 * 841. Keys and Rooms
 * {@link https://leetcode.com/problems/keys-and-rooms/ | Link}
 */

/** DFS */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const seen = new Set<number>()

  const dfs = (i: number) => {
    if (seen.has(i)) return
    seen.add(i)

    for (const j of rooms[i]) dfs(j)
  }

  dfs(0)

  return rooms.length === seen.size
}

/** BFS */
export function canVisitAllRoom2s(rooms: number[][]): boolean {
  const seen = new Set<number>()
  const q = [0]

  for (const i of q) {
    if (seen.has(i)) continue
    seen.add(i)
    q.push(...rooms[i])
  }

  const res = rooms.length === seen.size

  return res
}
