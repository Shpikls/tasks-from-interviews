function setCallsYes(n) {
	let calls = n;

	return function () {
		if (calls > 0) {
			calls--;
			return 'yes';
		} else {
			return 'no'
		}
	}
}

const getYes = setCallsYes(2);

console.log(getYes());
console.log(getYes());
console.log(getYes());
console.log(getYes());