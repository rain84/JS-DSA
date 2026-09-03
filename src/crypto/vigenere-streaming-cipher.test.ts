import { alphabet, decode, encode } from './vigenere-streaming-cipher'

// Poly-alphabet "Vigenere"-streaming-cipher
//   const autokey = 'QUEENLY'
//   const message = 'ATTACKATDAWN'.toLocaleLowerCase()
//   const encodedMessage = 'QNXEPVYTWTWP'.toLocaleLowerCase()

const autokey = 'Р'
const message = 'ЗАВТРАПОЗДНО'.toLowerCase()
const encodedMessage = 'шзвфгрпюцлсь'

it('should encode', () => {
	expect(encode(alphabet.ru)(message, autokey)).toBe(encodedMessage)
})

it('should decode', () => {
	expect(decode(alphabet.ru)(encodedMessage, autokey)).toBe(message)
})

it('should just work', () => {
	expect(decode(alphabet.ru)(encode(alphabet.ru)(message, autokey), autokey)).toBe(message)
})
