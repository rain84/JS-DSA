import { deepClone } from './deepClone'

describe('deepClone — GreatFrontEnd / Deep Clone', () => {
	describe('примитивы и null', () => {
		it.each([
			[null, null],
			[undefined, undefined],
			[42, 42],
			[0, 0],
			[-0, -0],
			[NaN, NaN],
			[Infinity, Infinity],
			['hello', 'hello'],
			['', ''],
			[true, true],
			[false, false],
			[42n as any, 42n as any],
		])('deepClone(%p) === %p (примитив возвращается как есть)', (input, expected) => {
			const result = deepClone(input)
			if (Number.isNaN(expected as number)) {
				expect(Number.isNaN(result as number)).toBe(true)
			} else {
				expect(result).toBe(expected)
			}
		})
	})

	describe('примеры из условия', () => {
		it('Example 1: мутация клона не затрагивает оригинал (вложенный объект)', () => {
			const obj1 = { user: { role: 'admin' } }
			const clonedObj1 = deepClone(obj1)
			clonedObj1.user.role = 'guest'

			expect(clonedObj1.user.role).toBe('guest')
			expect(obj1.user.role).toBe('admin')
			// разные ссылки
			expect(clonedObj1).not.toBe(obj1)
			expect(clonedObj1.user).not.toBe(obj1.user)
		})

		it('Example 2: мутация оригинала не затрагивает клон (массив с объектами)', () => {
			const obj2 = { foo: [{ bar: 'baz' }] }
			const clonedObj2 = deepClone(obj2)
			obj2.foo[0].bar = 'bax'

			expect(obj2.foo[0].bar).toBe('bax')
			expect(clonedObj2.foo[0].bar).toBe('baz')
			expect(clonedObj2.foo).not.toBe(obj2.foo)
			expect(clonedObj2.foo[0]).not.toBe(obj2.foo[0])
		})
	})

	describe('массивы', () => {
		it('клонирует плоский массив без общих ссылок', () => {
			const arr = [1, 2, 3]
			const cloned = deepClone(arr)
			expect(cloned).toEqual([1, 2, 3])
			expect(cloned).not.toBe(arr)
			cloned.push(4)
			expect(arr).toEqual([1, 2, 3])
		})

		it('глубоко клонирует вложенные массивы', () => {
			const arr = [1, [2, [3, 4]], 5]
			const cloned = deepClone(arr)
			expect(cloned).toEqual([1, [2, [3, 4]], 5])
			expect(cloned[1]).not.toBe((arr as any)[1])
			expect((cloned[1] as any)[1]).not.toBe((arr[1] as any)[1])
			;(cloned[1] as number[])[0] = 99
			expect((arr[1] as number[])[0]).toBe(2)
		})

		it('клонирует массив с объектами', () => {
			const arr = [{ a: 1 }, { b: { c: 2 } }]
			const cloned = deepClone(arr)
			expect(cloned).toEqual(arr)
			expect(cloned[0]).not.toBe(arr[0])
			expect(cloned[1]).not.toBe(arr[1])
			expect((cloned[1] as any).b).not.toBe((arr[1] as any).b)
		})

		it('клонирует пустой массив', () => {
			const arr: unknown[] = []
			const cloned = deepClone(arr)
			expect(cloned).toEqual([])
			expect(cloned).not.toBe(arr)
		})

		it('сохраняет разреженные массивы / дырки как undefined через map (поведение GFE)', () => {
			// map клонирует дырки как undefined — проверяем что не падает
			const arr = [1, undefined, 3] as unknown[]
			const cloned = deepClone(arr)
			expect(cloned.length).toBe(3)
		})
	})

	describe('объекты', () => {
		it('клонирует плоский объект без общих ссылок', () => {
			const obj = { a: 1, b: 'x', c: true, d: null }
			const cloned = deepClone(obj)
			expect(cloned).toEqual(obj)
			expect(cloned).not.toBe(obj)
			;(cloned as any).a = 99
			expect(obj.a).toBe(1)
		})

		it('глубоко клонирует вложенные объекты', () => {
			const obj = { a: { b: { c: { d: 1 } } } }
			const cloned = deepClone(obj)
			expect(cloned).toEqual(obj)
			expect(cloned.a).not.toBe(obj.a)
			expect(cloned.a.b).not.toBe(obj.a.b)
			expect(cloned.a.b.c).not.toBe(obj.a.b.c)
			cloned.a.b.c.d = 999
			expect(obj.a.b.c.d).toBe(1)
		})

		it('клонирует объект с массивом внутри', () => {
			const obj = { tags: ['admin', 'editor'], meta: { count: 2 } }
			const cloned = deepClone(obj)
			expect(cloned).toEqual(obj)
			expect(cloned.tags).not.toBe(obj.tags)
			expect(cloned.meta).not.toBe(obj.meta)
		})

		it('клонирует пустой объект', () => {
			const obj = {}
			const cloned = deepClone(obj)
			expect(cloned).toEqual({})
			expect(cloned).not.toBe(obj)
		})

		it('копирует только own enumerable string keys (не тянет прототип)', () => {
			const proto = { inherited: 'should not be cloned' }
			const obj = Object.create(proto) as any
			obj.own = { x: 1 }
			obj.visible = 42

			const cloned = deepClone(obj)
			expect(cloned).toEqual({ own: { x: 1 }, visible: 42 })
			expect((cloned as any).inherited).toBeUndefined()
			expect(cloned.own).not.toBe(obj.own)
		})

		it('игнорирует symbol-keyed свойства (как у GFE решения)', () => {
			const sym = Symbol('foo')
			const obj: any = { a: 1 }
			obj[sym] = 'secret'
			const cloned = deepClone(obj) as any
			expect(cloned.a).toBe(1)
			expect(cloned[sym]).toBeUndefined()
		})

		it('игнорирует non-enumerable свойства', () => {
			const obj: any = {}
			Object.defineProperty(obj, 'hidden', {
				value: { x: 1 },
				enumerable: false,
			})
			obj.visible = { y: 2 }
			const cloned = deepClone(obj) as any
			expect(cloned.visible).toEqual({ y: 2 })
			expect(cloned.visible).not.toBe(obj.visible)
			expect(cloned.hidden).toBeUndefined()
		})
	})

	describe('смешанные структуры', () => {
		it('глубоко клонирует сложную JSON-структуру', () => {
			const original = {
				id: 1,
				user: { name: 'Ada', tags: ['admin', 'editor'], profile: { age: 30 } },
				list: [{ bar: 'baz' }, { nested: [1, 2, { deep: true }] }],
				empty: null,
			}
			const cloned = deepClone(original)

			expect(cloned).toEqual(original)
			expect(cloned).not.toBe(original)
			expect(cloned.user).not.toBe(original.user)
			expect(cloned.user.tags).not.toBe(original.user.tags)
			expect(cloned.user.profile).not.toBe(original.user.profile)
			expect(cloned.list).not.toBe(original.list)
			expect(cloned.list[0]).not.toBe(original.list[0])
			expect((cloned.list[1] as any).nested).not.toBe((original.list[1] as any).nested)

			// Мутация клона не влияет на оригинал
			cloned.user.tags.push('owner')
			expect(original.user.tags).toEqual(['admin', 'editor'])
			expect(cloned.user.tags).toEqual(['admin', 'editor', 'owner'])

			// Мутация оригинала не влияет на клон
			original.list[0].bar = 'changed'
			expect(cloned.list[0].bar).toBe('baz')
		})

		it('каждый вложенный уровень — новая ссылка', () => {
			const obj = { a: [{ b: { c: [1, 2, 3] } }] }
			const cloned = deepClone(obj)
			expect(cloned.a).not.toBe(obj.a)
			expect(cloned.a[0]).not.toBe(obj.a[0])
			expect(cloned.a[0].b).not.toBe(obj.a[0].b)
			expect(cloned.a[0].b.c).not.toBe(obj.a[0].b.c)
		})
	})

	describe('иммутабельность / отсутствие shared references (доп. проверки GFE)', () => {
		it('modifying cloned nested array does not affect original', () => {
			const original = { arr: [1, 2, { x: 3 }] }
			const copy = deepClone(original)
			;(copy.arr[2] as any).x = 999
			expect((original.arr[2] as any).x).toBe(3)
		})

		it('modifying original nested object does not affect clone', () => {
			const original = { a: { b: 1 } }
			const copy = deepClone(original)
			original.a.b = 999
			expect(copy.a.b).toBe(1)
		})

		it('two clones are independent', () => {
			const original = { v: { n: 1 } }
			const c1 = deepClone(original)
			const c2 = deepClone(original)
			expect(c1).not.toBe(c2)
			expect(c1.v).not.toBe(c2.v)
			c1.v.n = 100
			expect(c2.v.n).toBe(1)
			expect(original.v.n).toBe(1)
		})
	})

	describe('совместимость с JSON-сериализуемыми значениями', () => {
		it('результат deepClone равен JSON.parse(JSON.stringify(value)) для JSON-safe данных', () => {
			const value = { a: [1, { b: 'c' }], d: null, e: 3.14, f: true }
			const viaJSON = JSON.parse(JSON.stringify(value))
			expect(deepClone(value)).toEqual(viaJSON)
		})

		it('структурная копия проходит JSON round-trip', () => {
			const original = { foo: [{ bar: 'baz' }], num: 42, str: 'hi', flag: false, nil: null }
			const cloned = deepClone(original)
			expect(JSON.stringify(cloned)).toBe(JSON.stringify(original))
		})
	})
})
