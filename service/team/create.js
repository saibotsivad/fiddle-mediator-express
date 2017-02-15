const transform = require('../../transform/team-form-to-database')

module.exports = mediator => {
	mediator.provide('service/team/create', dirtyTeam => {
		const team = transform(dirtyTeam)
		return mediator.call('mysql:query', generateQuery(team))
			.then(() => team)
	})
}

function generateQuery(team) {
	// using some better tool, of course
	return `INSERT stuff`
}
