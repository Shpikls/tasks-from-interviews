const solution = (number) => {
	let sum = 0;

	for (let i = 1; i < number; i++) {
		if (i % 5 === 0 || i % 3 === 0) sum += i
	}

	return sum
}

module.exports = solution