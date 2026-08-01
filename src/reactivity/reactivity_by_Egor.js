let activeEffect = null
const targetMap = new WeakMap()
function track(target, key) {
	if (!activeEffect) {
		return
	}
	let depsMap = targetMap.get(target)
	if (!depsMap) {
		depsMap = new Map()
		targetMap.set(target, depsMap)
	}

	let deps = depsMap.get(key)
	if (!deps) {
		deps = new Set()
		depsMap.set(key, deps)
	}
	deps.add(activeEffect)
}
function trigger(target, key) {
	const depsMap = targetMap.get(target)
	if (!depsMap) {
		return
	}
	const deps = depsMap.get(key)
	if (!deps) {
		return
	}
	for (const eff of deps) eff()
}
function ref(raw) {
	const handler = {
		get value() {
			track(handler, 'value')
			return raw
		},
		set value(newVal) {
			if (newVal !== raw) {
				raw = newVal
				trigger(handler, 'value')
			}
		},
	}
	return handler
}
function reactive(raw) {
	const handler = {
		get(target, key, reciever) {
			const result = Reflect.get(target, key, reciever)
			track(handler, key)
			return result
		},
		set(target, key, value, reciever) {
			const oldValue = Reflect.get(target, key, reciever)
			if (oldValue !== value) {
				Reflect.set(target, key, value, reciever)
				trigger(handler, key)
			}
		},
	}
	return new Proxy(raw, handler)
}
function effect(cb) {
	activeEffect = cb
	cb()
	activeEffect = null
}
function computed(getterCb) {
	const result = ref()
	effect(() => (result.value = getterCb()))
	return result
}
const firstName = ref('Egor')
const lastName = ref('Startsev')
const fullName = computed(() => {
	console.log('Внутри computed')
	return `${firstName.value} ${lastName.value}`
})
firstName.value = 'a'
firstName.value = 'b'
firstName.value = 'c'
