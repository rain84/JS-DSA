type CryptoFn = (iMessage: number, iKeyword: number, length: number) => number

interface ConfigSection<T> {
	type: 'encode' | 'decode'
	algorithm: CryptoFn
	getAutokeyCh:
		| ((primer: string, message: T) => (i: number) => string)
		| ((primer: string, result: T) => (i: number) => string)
}
interface Config {
	encode: ConfigSection<string>
	decode: ConfigSection<string[]>
}

//   "tabula recta"-functions
const config: Config = {
	encode: {
		type: 'encode',
		algorithm: (iMessage, iKeyword, length) => (iMessage + iKeyword) % length,
		getAutokeyCh: (primer, message) => {
			const autokey = `${primer}${message}`.slice(0, message.length)
			return (i: number) => autokey[i]
		},
	},
	decode: {
		type: 'decode',
		algorithm: (iMessage, iKeyword, length) => (iMessage - iKeyword + length) % length,
		getAutokeyCh: (primer, result) => (i: number) => {
			return i < primer.length ? primer[i] : result[result.length - 1]
		},
	},
}

export const alphabet = {
	ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
	en: 'abcdefghijklmnopqrstuvwxyz',
}

const execute =
	<T extends string | string[]>(config: ConfigSection<T>) =>
	(alphabet: string) =>
	(message: string, primer: string): string => {
		alphabet = alphabet.toLocaleLowerCase()
		message = message.toLocaleLowerCase()
		primer = primer.toLocaleLowerCase()

		const result: string[] = []
		const getAutokeyCh =
			config.type === 'encode'
				? config.getAutokeyCh(primer, message as T)
				: config.getAutokeyCh(primer, result as T)

		const ch = {
			message: '',
			autokey: '',
		}

		const index = {
			message: -1,
			autokey: -1,
			result: -1,
		}

		for (let i = 0; i < message.length; i++) {
			ch.message = message[i]
			ch.autokey = getAutokeyCh(i)

			index.autokey = alphabet.indexOf(ch.autokey)
			index.message = alphabet.indexOf(ch.message)

			if (index.autokey === -1)
				throw new Error(`Symbol "${ch.autokey}" in keyword is not valid for alphabet`)
			if (index.message === -1)
				throw new Error(`Symbol "${ch.message}" in message is not valid for alphabet`)

			index.result = config.algorithm(index.message, index.autokey, alphabet.length)

			result.push(alphabet[index.result])
		}

		return result.join('')
	}

export const encode = execute<string>(config.encode)
export const decode = execute<string[]>(config.decode)
