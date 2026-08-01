const validateBrackets = (str) => {
	const s = ''

	const bracketPairs = ['()', '[]', '{}'].reduce(
		(acc, [left, right]) => {
			acc.left[left] = right
			acc.right[right] = left
			return acc
		},
		{ left: {}, right: {} },
	)

	const stack = []

	for (const ch of str) {
		if (ch in bracketPairs.left) {
			stack.push(ch)
		} else if (ch in bracketPairs.right) {
			if (stack.pop() !== bracketPairs.right[ch]) return false
		}
	}

	const res = !stack.length

	return res
}

const str = `const getSumZeroPair = (arr) => {
    let indexLeft = 0,
      indexRight = arr.length - 1;

    while (indexLeft < indexRight) {
      const left = arr[indexLeft];
      const right = arr[indexRight];
      const sum = left + right;
    
      if (sum === 0) {
        return [left, right];
      } else if (sum < 0) {
        indexLeft++;
      } else {
        indexRight--;
      }
    }
  };`

const res = validateBrackets(str)
console.log(res)
