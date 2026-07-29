/**
 * 2632. Curry 🔒
 * {@link https://leetcode.com/problems/curry | Link}
 */
export function curry(fn: Fn): Fn {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) return fn(...args)

    return curried.bind(null, ...args)
  }
}
