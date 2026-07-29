/**
 * {@link https://leetcode.com/problems/circular-sentence | 2490. Circular Sentence}
 *
 * Topics: String
 */
export const isCircularSentence = (sentence: string): boolean =>
  sentence.split(' ').every((x, i, arr) => x[0] === arr[(i || arr.length) - 1].at(-1))
