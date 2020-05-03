'use strict';

const controllers = require('./../controllers');

const routes = [
	{
		path: '/',
		method: 'GET',
		config: {
			description: 'Default route',
			notes: 'Deafult route to check the service state',
			tags: ['api'],
			handler: controllers.default,
		},
	},
];

module.exports = routes;
