/**
 * 1079. Letter Tile Possibilities
 * {@link https://leetcode.com/problems/letter-tile-possibilities/ | Link}
 */
export function numTilePossibilities(tiles: string): number {
  const set = new Set<string>()

  const fn = (tiles: string, prev: string[] = []) => {
    if (!tiles[0]) return
    const head = tiles[0]

    fn(tiles.slice(1), prev)
  }

  fn(tiles)

  return set.size
}
