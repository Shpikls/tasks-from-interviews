const delay = function (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

const promises = [
	delay(50).then(() => 42),
	delay(75).then(() => { throw 'nope' })
]

// console.log(promises);

async function getResult(promises) {
	let result = [];

	promises.forEach((item) => {
		item.then((value) => result.push({
				status: 'resolved',
				value: value
			}
		))
	})

	return result;
}

console.log(getResult(promises));