module.exports = mediator => {
	require('./list')(mediator)
	require('./create')(mediator)
	require('./get')(mediator)
	require('./update')(mediator)
}
