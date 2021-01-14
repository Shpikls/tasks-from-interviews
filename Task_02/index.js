const delay = function (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

const promises = [
	delay(1000).then(() => 42),
	delay(1500).then(() => { throw 'nope' })
]

async function getResult(promises) {
	let result = [];

	for (const item of promises) {
		await item
			.then((value) => result.push({
				status: 'resolved',
				value: value
			}))
			.catch((err) => result.push({
				status: 'rejected',
				reason: err
			}));
	}

	return result;
}

module.exports =  { getResult , promises}