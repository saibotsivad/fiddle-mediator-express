const express = require('express')
const mannish = require('mannish')

const database = require('./database')
const redis = require('./redis')
const route = require('./route')
const authentication = require('./authentication')
const service = require('./service')

const configuration = process.env.configuration
	? JSON.parse(process.env.configuration)
	: require('./config')

const mediator = mannish()
database(configuration.database, mediator)
redis(configuration.redis, mediator)
service(mediator)

const auth = authentication(mediator)

const app = express()
app.use(route({ mediator, auth }))
app.listen(3000)

console.log('Listening on port 3000')
