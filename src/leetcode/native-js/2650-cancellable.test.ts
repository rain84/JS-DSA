import { cancellable } from './2650-cancellable'

it.each(
	//  prettier-ignore
	[
		// [
		//   function* tasks() {
		//     yield Promise.resolve(42)
		//   },
		//   50,
		//   42
		// ],
		// [
		//   function* (): Generator<Promise<string>> {
		//     const msg = yield new Promise((res) => res('Hello'))
		//     throw `Error: ${msg}`
		//   },
		//   50,
		//   'Error: Hello'
		// ],
		// [
		//  function* () {
		//     yield new Promise((res) => setTimeout(res, 200))
		//     return 'Success'
		//   },
		//   100,
		//   'Cancelled'
		// ],
		// [
		//   function* () {
		//     let result = 0
		//     try {
		//       yield new Promise((res) => setTimeout(res, 100))
		//       result += (yield new Promise((res) => res(1))) as number
		//       yield new Promise((res) => setTimeout(res, 100))
		//       result += (yield new Promise((res) => res(1))) as number
		//     } catch (e) {
		//       return result
		//     }
		//     return result
		//   },
		//   150,
		//   1
		// ],
		[
			function* () {
				try {
					yield new Promise((resolve, reject) => reject('Promise Rejected'))
				} catch (e) {
					const a = (yield new Promise((resolve) => resolve(2))) as number
					const b = (yield new Promise((resolve) => resolve(2))) as number
					return a + b
				}
			},
			null,
			4,
		],
	],
)('should work %#', async (g, timeOut, output) => {
	const [cancel, p] = cancellable(g())
	if (typeof timeOut === 'number') setTimeout(cancel, timeOut)

	// biome-ignore lint:
	let res: any
	try {
		res = await p
	} catch (error) {
		res = error
	} finally {
		// biome-ignore lint:
		return expect(Promise.resolve(res)).resolves.toBe(output)
	}
})
