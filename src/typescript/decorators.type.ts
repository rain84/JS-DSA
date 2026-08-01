// https://2ality.com/2022/10/javascript-decorators.html
export type Target<T, A extends Any[], R> = (this: T, ...args: A) => R

export type Decorator = <T, A extends Any[], R>(
	target: Target<T, A, R>,
	ctx: ClassMethodDecoratorContext<T, Target<T, A, R>>,
) => (this: T, ...args: A) => R
