const solution = (number) => {
	const arr = [];

	for (let i = 1; i < number; i++) {
		if (i % 5 === 0 || i % 3 === 0) arr.push(i)
	}

	return arr.reduce((accum, item) => accum + item, 0)
}

module.exports = solution