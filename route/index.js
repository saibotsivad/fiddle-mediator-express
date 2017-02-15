const express = require('express')
const handleError = require('../helper/error-handler')
const teamRoute = require('./team')

module.exports = ({ mediator, auth }) => {
	const router = express.Router()

	router.use('/team', teamRoute({ mediator, auth }))
	// and so on for the other routes

	return router
}
