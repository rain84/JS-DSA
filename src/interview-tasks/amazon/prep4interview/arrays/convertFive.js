// https://practice.geeksforgeeks.org/problems/replace-all-0s-with-5/1

export const convertFive = (num) => {
	return +[...num.toString()].map((val) => (val === '0' ? '5' : val)).join('')
}
