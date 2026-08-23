import { longestCommonPrefix } from './0014-longestCommonPrefix'

it('should work 1', () => {
	expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
})

it('should work 2', () => {
	expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
})

it('should work 3', () => {
	expect(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])).toBe('inters')
})

it('should work 4', () => {
	expect(longestCommonPrefix([''])).toBe('')
})

it('should work 5', () => {
	expect(longestCommonPrefix(['a'])).toBe('a')
})

it('should work 6', () => {
	expect(longestCommonPrefix(['cir', 'c'])).toBe('c')
})