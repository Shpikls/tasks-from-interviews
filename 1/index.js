function setCallsYes(n) {
	let calls = n;

	return function () {
		if (calls > 0) {
			calls--;
			return 'Yes';
		} else {
			return 'No'
		}
	}
}

module.exports = { setCallsYes }