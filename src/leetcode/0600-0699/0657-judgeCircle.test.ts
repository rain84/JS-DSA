import { judgeCircle } from './0657-judgeCircle'

it.each(
	// prettier-ignore
	[
		['UD', true],
		['LL', false],
		['RRDD', false],
		['LDRRLRUUL', false],
		['UDLR', true],
		['', true],
		['UUUDDD', true],
		['UUUDD', false],
		['RL', true],
		['UDUDUDUD', true],
	],
)('judgeCircle("%s") = %s', (moves, expected) => {
	expect(judgeCircle(moves)).toBe(expected)
})