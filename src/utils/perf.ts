import { performance } from 'node:perf_hooks'

// biome-ignore lint:
export const evaluate = (fn: Fn, args: any[], iterations: number) => {
	const time = performance.now()

	for (let i = iterations; i > 0; i--) {
		fn(...args)
	}

	return performance.now() - time
}

// biome-ignore lint:
export const perf = (fns: Fn | Fn[], args: any[] = [], iterations = 10 ** 5) => {
	if (!Array.isArray(fns)) fns = [fns]

	const res = fns.map((fn) => ({
		name: fn.name,
		time: evaluate(fn, args, iterations),
	}))

	const minTime = Math.min(...res.map(({ time }) => time))
	const maxSpeed = iterations / minTime
	res.sort((a, b) => a.time - b.time)

	const data = Object.fromEntries(
		res.map((x, i) => [
			i + 1,
			{
				Function: x.name,
				'ops/sec': ((iterations / x.time) * 1000) | 0,
				'Time (ms)': Math.floor(x.time),
				Iterations: iterations,
				'Speed (%)': ((100 * iterations) / x.time / maxSpeed).toFixed(2),
			},
		]),
	)

	console.table(data)
}
