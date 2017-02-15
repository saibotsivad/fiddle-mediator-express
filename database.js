const mysql = require('actual-mysql')
const queryHandler = require('./helper/query-handler')

module.exports = (credentials, mediator) => {
	const database = mysql(credentials)

	mediator.provide('mysql:query', query => database.query(query).then(queryHandler))
	// there would probably be a handful of these for common functionality
}
