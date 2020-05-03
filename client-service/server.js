'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const cofig = require('./config');
const routes = require('./routes');

const init = async () => {
	const server = Hapi.server({
		port: cofig.PORT,
		host: cofig.HOST,
	});

	server.route(routes);

	const swaggerOptions = {
		info: {
			title: 'API Documentation',
			version: '1.0.0',
		},
	};

	await server.register([
		Inert,
		Vision,
		{
			plugin: HapiSwagger,
			options: swaggerOptions
		}
	]);

	return server;
};

module.exports = init();
