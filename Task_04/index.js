const sum = (a, b) => {
	if(b !== undefined) {
		return a + b
	} else {
		return (b) => {
			return a + b
		}
	}
}

module.exports = sum