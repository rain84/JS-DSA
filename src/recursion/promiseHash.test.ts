import { promiseHash } from './promiseHash'

const random = (max = 0, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

const r = <T>(val: T) => new Promise((res) => setTimeout(res, random(10), val))

const input = {
	name: r('John Lennon'),
	spouse: {
		name: r('Yoko Ono'),
		parents: [r('Mother'), r('Father')],
	},
	imaginaryChildren: [r('Peter'), r('Anna')],
}

it('should work', async () => {
	await expect(promiseHash(input)).resolves.toEqual({
		name: 'John Lennon',
		spouse: {
			name: 'Yoko Ono',
			parents: ['Mother', 'Father'],
		},
		imaginaryChildren: ['Peter', 'Anna'],
	})
})
