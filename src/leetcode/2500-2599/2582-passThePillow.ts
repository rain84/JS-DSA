/**
 * 2582. Pass the Pillow
 * {@link https://leetcode.com/problems/pass-the-pillow/ | Link}
 */
export function passThePillow(n: number, time: number): number {
  const t = n - 1
  const forward = Math.ceil(time / t) & 1
  const x = time % t || t
  const res = forward ? x + 1 : t - x + 1

  return res
}
