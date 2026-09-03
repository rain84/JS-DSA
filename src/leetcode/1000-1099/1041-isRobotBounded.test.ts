import { isRobotBounded } from './1041-isRobotBounded'

it.each(
	// prettier-ignore
	[
		['GGLLGG', true],
		['GG', false],
		['GL', true],
		['GLGLGGLGL', false],
		['LLG', true],
		['RRG', true],
		['G', false],
		['L', true],
		['R', true],
		['GRGL', false],
	],
)('isRobotBounded("%s") = %s', (instructions, expected) => {
	expect(isRobotBounded(instructions)).toBe(expected)
})
