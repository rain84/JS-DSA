import { perf } from './perf'

const f = (cnt: number) => () => {
	const n = 100
	let c = cnt
	while (c--) {
		let x = c
		for (let i = 0; i < n; i++) {
			x += i
		}
	}
}

const f_100 = f(1)
const f_50 = f(2)
const f_33 = f(3)
const f_25 = f(4)
const f_20 = f(5)
const f_10 = f(10)

perf([f_100, f_50, f_33, f_25, f_20, f_10], [1])
