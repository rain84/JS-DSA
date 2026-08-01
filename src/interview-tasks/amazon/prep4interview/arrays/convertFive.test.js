import { convertFive } from './convertFive'

it('convertFive should work', () => {
	expect(convertFive(1004)).toBe(1554)
	expect(convertFive(121)).toBe(121)
})
