import { getLength } from './segment'

// It plays well in browsers, (Chrome, for example)
// But can not be reproducible here because of of lack node.js support
// TypeError: Intl.Segmenter is not a constructor
it('should calculate length of any arbitrary string', () => {
	const text = '👨‍👨‍👦‍👦깍ко̅д👨🏿‍'
	expect(getLength(text)).toBe(6)
})
