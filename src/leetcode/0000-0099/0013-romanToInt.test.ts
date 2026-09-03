import { romanToInt } from './0013-romanToInt'

it('should work 1', () => {
	expect(romanToInt('III')).toBe(3)
})

it('should work 2', () => {
	expect(romanToInt('IV')).toBe(4)
})

it('should work 3', () => {
	expect(romanToInt('IX')).toBe(9)
})

it('should work 4', () => {
	expect(romanToInt('LVIII')).toBe(58)
})

it('should work 5', () => {
	expect(romanToInt('MCMXCIV')).toBe(1994)
})

it('should work 6', () => {
	expect(romanToInt('XLII')).toBe(42)
})

it('should work 7', () => {
	expect(romanToInt('CDXLIV')).toBe(444)
})

it('should work 8', () => {
	expect(romanToInt('M')).toBe(1000)
})
