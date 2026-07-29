/**
 * {@link https://leetcode.com/problems/neighboring-bitwise-xor | 2683. Neighboring Bitwise XOR}
 *
 * Topics: Array | Bit Manipulation
 */
export function doesValidArrayExist(derived: number[]): boolean {
  let c = 0
  for (const x of derived) c += x
  return !(c & 1)
}

export function doesValidArrayExist2(derived: number[]): boolean {
  return derived.reduce((a, b) => a ^ b) === 0
}
