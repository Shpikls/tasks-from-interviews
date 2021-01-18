const { destructuringPizza } = require('./index')

describe('Task_05 test', () => {
	test('Truth value', () => {
		const obj = {
			title: 'pizza',
			pfc: {
				protein: 9.77,
				fat: 13.79,
				carbs: 24.59,
			},
			energyValue: {
				calories: 262.49,
				energy: 1098,
			}
		}

		const result = {
			title: 'pizza',
			protein: 9.77,
			fat: 13.79,
			carbs: 24.59,
			calories: 262.49,
			energy: 1098,
		}

		expect(destructuringPizza(obj)).toEqual(result)
	})

	test('Undefined value', () => {
		const obj = {
			title: 'pizza',
			pfc: {
				protein: 9.77,
				fat: 13.79,
				carbs: 24.59,
			},
			energyValue: {
				calories: 262.49,
			}
		}

		const result = {
			title: 'pizza',
			protein: 9.77,
			fat: 13.79,
			carbs: 24.59,
			calories: 262.49,
		}

		expect(destructuringPizza(obj)).toEqual(result)
	})

	test('Undefined value', () => {
		const obj = {
			title: 'pizza',
			pfc: {
				protein: 9.77,
				fat: 13.79,
				carbs: 24.59,
			},
		}

		const result = {
			title: 'pizza',
			protein: 9.77,
			fat: 13.79,
			carbs: 24.59,
		}

		expect(destructuringPizza(obj)).toEqual(result)
	})

	test('Without arguments', () => {
		expect(destructuringPizza()).toEqual({})
	})
})