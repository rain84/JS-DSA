/**
 * 735. Asteroid Collision
 * {@link https://leetcode.com/problems/asteroid-collision/ | Link}
 *
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []

  for (let i = 0; i < asteroids.length; i++) {
    let x = asteroids[i]
    while (stack.length && 0 < stack.at(-1)! && x < 0) {
      const prev = stack.pop()!
      const sum = prev + x

      if (sum === 0) {
        x = 0
        break
      }

      if (sum > 0) {
        x = prev
      }
    }

    if (x) stack.push(x)
  }

  return stack
}
