type Input = string | number
type Res<T extends Input> = T extends string ? string : number
type Res2 = string | number

const fn = <T extends Input>(data: T): Res2 => {
	return data
}

type MessaageOf<T> = T extends { message: unknown } ? T['message'] : never

interface Shape {
	message: 'sms' | 'udp'
	id: number
}

type M = MessaageOf<Shape>
type M2 = MessaageOf<7>

type Flatten<T> = T extends Array<infer U> ? U : T
type F1 = Flatten<string[]>
type F2 = Flatten<number>

type ReturnType2<T> = T extends (...args: Any[]) => infer R ? R : never
type R1 = ReturnType2<(a: number) => string>
type R2 = ReturnType2<number>

type ToArray<T> = [T] extends Any ? T[] : never
type T1 = ToArray<string>
type T2 = ToArray<string | number>
