const isPP = function(n){
	let result = null;

	for (let i = 2; i <= n/2; i++) {
		for (let k = 2; k <= n/2; k++) {
			if (Math.pow(i, k) === n) {
				return [i, k]
			} else if (Math.pow(i, k) > n) {
				break;
			}
		}
	}

	return result;
}

module.exports = { isPP }