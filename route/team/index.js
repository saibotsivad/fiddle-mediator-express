const express = require('express')
const handleError = require('../helper/error-handler')

module.exports = ({ mediator, auth }) => {
	const router = express.Router()

	router.get('/', (req, res) => {
		mediator.call('service/team/list')
			.then(teams => res.render('team/list', teams))
			.catch(handleError(req, res))
	})

	router.post('/', auth.isAuthenticated, (req, res) => {
		mediator.call('service/team/create', req.body)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	router.get('/:teamId', (req, res) => {
		mediator.call('service/team/get', req.params.teamId)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	router.post('/:teamId', auth.isAuthenticated, (req, res) => {
		mediator.call('service/team/update', req.params.teamId, req.body)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	return router
}
