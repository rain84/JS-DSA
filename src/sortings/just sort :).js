{
	// sort order is 'asc' by default
	const justSort = (arr2, order = false) => {
		const orderFn = {
			true: Math.max,
			false: Math.min,
		}[order]
		const arr = [...arr2]
		const res = []

		while (arr.length) {
			const el = orderFn(...arr)
			const idx = arr.indexOf(el)
			res.push(el)
			arr.splice(idx, 1)
		}

		return res
	}

	const justSort2 = (arr2, order = false) => {
		const arr = [...arr2]
		const res = []
		let i = 0
		let indexEl = 0
		let el = { true: Number.NEGATIVE_INFINITY, false: Number.POSITIVE_INFINITY }[order]

		while (arr.length) {
			const isMin = !order && arr[i] < el
			const isMax = order && el < arr[i]

			if (isMin || isMax) {
				el = arr[i]
				indexEl = i
			}

			if (++i === arr.length) {
				res.push(el)
				arr.splice(indexEl, 1)
				i = indexEl = 0
				el = arr[i]
			}
		}

		return res
	}

	const data = [7, 0, 2, 0, 2, 3, 4, 2, 3, 6]

	const testPerfomance = (fn, args, iterations = 10 ** 5) => {
		const time = performance.now()

		for (let i = iterations; i; i--) {
			fn(...args)
		}
		const execTime = ((performance.now() - time) / iterations).toFixed(4)

		console.log(`"${fn.name || 'ƒn'}" executed during ${execTime}`)
	}

	testPerfomance(justSort, [data])
	testPerfomance(justSort, [data, true])
	testPerfomance(justSort2, [data])
	testPerfomance(justSort2, [data, true])

	console.log(
		`
        data:       ${data}
        justSort : ${justSort(data)}
        justSort2: ${justSort2(data)}
    `.trim(),
	)
}
