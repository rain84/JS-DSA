/**
 * GreatFrontEnd — Get Elements By Class Name
 * {@link https://www.greatfrontend.com/questions/javascript/get-elements-by-class-name | Link}
 *
 * Implement getElementsByClassName(element, className) that returns all descendant
 * elements with given className, similar to Element.getElementsByClassName.
 * - Traverses DOM tree depth-first
 * - Matches elements where classList contains className
 * - Does not include the root element itself (unless it is descendant)
 */

export function getElementsByClassName(element: Element, classNames: string): Array<Element> {
	if (!classNames.trim()) return []

	const res: Array<Element> = []
	const children: Element[] = Array.from(element.children)
	const names = classNames.trim().match(/\S+/g)!

	while (children.length) {
		const child = children.pop()!

		let included = true
		for (const name of names) {
			if (!child.classList.contains(name)) {
				included = false
				break
			}
		}

		if (included) {
			res.push(child)
		}

		if (child.children.length > 0) {
			children.push(...Array.from(child.children))
		}
	}

	return res
}
