const { getResult, promises } = require('./index')

describe('Тестирвоание getResult(promises)', () => {
	test('Тестирвоанеи из полученного объекта promises', () => {
		return getResult(promises).then((data) => expect(data).toEqual([{"status": "resolved", "value": 42}, {"reason": "nope", "status": "rejected"}]))
	})
})