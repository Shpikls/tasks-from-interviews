const destructuringPizza = function({title, pfc: {protein, fat, carbs} = {}, energyValue: {calories, energy} = {}} = {}) {
	return {title, protein, fat, carbs, calories, energy}
}

module.exports = { destructuringPizza };